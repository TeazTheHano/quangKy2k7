import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {Alert} from 'react-native';
import {SetFormat, setList, UserFormat} from './data';
import {demoSets} from './factoryData';
import {useContext} from 'react';
import {CURRENT_SET_PUBLIC, RootContext} from './store';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});

export default storage;

/**
 *
 * @param set Array[] | 'all': choose to reset all data or specific data
 */
export const loadFactoryData = async (set: [] | 'all') => {
  if (set === 'all') {
    // reset all data
  } else {
    // reset specific data with set as resparams
    set.forEach(item => {
      storage
        .load({
          key: item,
          autoSync: false,
          syncInBackground: false,
        })
        .then(ret => {
          storage.save({
            key: item,
            data: ret,
            expires: null,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    });
  }
};

export const weeklyProgressData = async () => {
  const weeklyProgress = await storage
    .load({
      key: 'weeklyProgress',
      autoSync: false,
      syncInBackground: false,
    })
    .then(ret => {
      if (ret !== null) {
        console.log(ret);
        return ret;
      } else {
        // create the weeklyProgress data
        getWeeksWithDaysInCurrentMonth();
      }
    })
    .catch(err => {
      console.log(err.message);
      // if there is no data, create the weeklyProgress data
      getWeeksWithDaysInCurrentMonth();
    });

  return weeklyProgress;
};

function getWeeksWithDaysInCurrentMonth(): void {
  console.log('getWeeksWithDaysInCurrentMonth');

  const checkInData: {month: string; data: {}}[] = [];
  let monthInfo = `${new Date().getFullYear()}/${new Date().getMonth() + 1}`;

  const currentMonth: number = new Date().getMonth(); // Get the current month
  const currentYear: number = new Date().getFullYear(); // Get the current year
  const firstDayOfMonth: Date = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth: Date = new Date(currentYear, currentMonth + 1, 0); // Get the last day of the month

  // Get the day of the week for the last day of the month
  const lastDayOfMonthOfWeek: number = lastDayOfMonth.getDate();

  // Get the day of the week for the last day of the month in text format
  const lastDayOfMonthOfWeekText: string = lastDayOfMonth.toLocaleString(
    'default',
    {weekday: 'long'},
  );

  const weeks: {
    weekIndex: number;
    days: number[];
    checked: [null | true | false];
  }[] = [];
  let weekIndex: number = 0;
  let days: number[] = [];
  let checked: [null | true | false] = [null];

  for (let i = 1; i <= lastDayOfMonthOfWeek; i++) {
    days.push(i);
    checked.push(null);
    if (new Date(currentYear, currentMonth, i).getDay() === 0) {
      if (i === 1) {
        for (let ii = 0; ii < 7 - days.length; ii++) {
          console.log('ii', ii);
        }
      }
      weeks.push({weekIndex, days, checked});
      weekIndex++;
      days = [];
      checked = [null];
    } else if (i === lastDayOfMonthOfWeek) {
      weeks.push({weekIndex, days, checked});
    }
  }

  checkInData.push({month: monthInfo, data: weeks});

  storage.save({
    key: 'weeklyProgress',
    data: checkInData,
    expires: null,
  });

  weeklyProgressData();
}

// clear the storage
export const clearWeekly = async () => {
  storage.remove({
    key: 'weeklyProgress',
  });
};

export const saveSetWithID = async (data: SetFormat) => {
  try {
    await storage.save({
      key: 'set',
      id: data.id,
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert(`Failed to save set ${data.name}`);
    return false;
  }
};

export const getSetWithID = async (id: string) => {
  try {
    const ret: SetFormat = await storage.load({
      key: 'set',
      id: id,
    });
    return ret;
  } catch (error) {
    return false;
  }
};

export const removeSetWithID = async (id: string) => {
  try {
    await storage.remove({
      key: 'set',
      id: id,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getAllSets = async () => {
  try {
    const ret: SetFormat[] = await storage.getAllDataForKey('set');
    return ret;
  } catch (error) {
    return false;
  }
};

export const clearAllSets = async () => {
  try {
    await storage.clearMapForKey('set');
    return true;
  } catch (error) {
    return false;
  }
};

export const loadAllSets = async (sets: SetFormat[]) => {
  try {
    if (sets.length === 0) {
      console.log('////////////////// NO SET TO LOAD //////////////////');
      console.log(
        '////////////////// Load demo sets instead //////////////////',
      );
      await loadAllDemoSets();
    }
    for (const set of sets) {
      await storage.save({
        key: 'set',
        id: set.id,
        data: set,
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    console.log('Load demo sets instead');
    await loadAllDemoSets();
    return true;
  }
};

export const loadAllDemoSets = async () => {
  try {
    demoSets.forEach(async set => {
      await storage.save({
        key: 'set',
        id: set.id,
        data: set,
      });
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to load demo sets');
    return false;
  }
};

export const clearAllDemoSets = async () => {
  try {
    demoSets.forEach(async set => {
      await storage.remove({
        key: 'set',
        id: set.id,
      });
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to clear demo sets');
    return false;
  }
};

export const saveUser = async (data: UserFormat) => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save user');
    return false;
  }
};

export const getUser = async () => {
  try {
    const ret: UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
  } catch (error) {
    return false;
  }
};

export const removeUser = async () => {
  try {
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    return false;
  }
};
