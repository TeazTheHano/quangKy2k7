import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Lex14RegAuto, Lex16BoldAuto, Lex16RegAuto, Pay20BlackLine122, RoundBtn, SearchBox, SSBar, TopNav2, ViewColBetweenCenter, ViewColCenter, ViewRowBetweenCenter, ViewRowCenter } from '../../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { currentEditFolderItemInList, RootContext, setAsCurrent } from '../../data/store'
import clrStyle from '../../assets/componentStyleSheet'
import { deskCardEditIcon, doneEditIcon, notiBellIcon, sharpLeftArrow, xIcon } from '../../assets/svgXml'
import styles, { vh, vw } from '../../assets/stylesheet'
import { marginBottomForScrollView, searchEngine, showSetCardGray } from '../../assets/component'
import { FolderFormat, SetFormat } from '../../data/data'
import { editFolderFnc } from '../../data/storageFunc'

export default function FolderView({ route }: any) {
    if (route.params) { var { folderName, cate } = route.params }
    console.log(folderName, cate);

    const navigation = useNavigation()
    const [CURRENT_SETS, dispatch] = useContext(RootContext)
    const [currentFolder, setCurrentFolder] = React.useState<FolderFormat | undefined>(CURRENT_SETS.folderList?.filter(folder => folder.name === folderName)[0])
    const [isFolderEdit, setIsFolderEdit] = React.useState<boolean>(false)
    const [isShowPopup, setIsShowPopup] = React.useState<boolean>(false)

    const [setListIDs, setSetListIDs] = React.useState<string[]>([])
    const [setList, setSetList] = React.useState<SetFormat[]>([])
    const [setListSaved, setSetListSaved] = React.useState<boolean[]>([])

    const [setSearch, setSetSearch] = React.useState<string>('')
    const [setSearchResult, setSetSearchResult] = React.useState<SetFormat[]>([])
    const [SETID, setSETID] = React.useState<string | null>(null)
    const [setName, setSetName] = React.useState<string | null>(null)
    const [CreateFolderSetList, setCreateFolderSetList] = React.useState<string[]>([])
    const [isSearch, setIsSearch] = React.useState<boolean>(false)
    useEffect(() => {
        if (setSearch) {
            searchEngine(setSearch, CURRENT_SETS.all.filter((set) => set.author.email === CURRENT_SETS.userInfo?.email), 'set').then((result) => {
                setSetSearchResult(result as SetFormat[])
                console.log(result);
            })
        } else {
            setSetSearchResult([])
        }
    }, [setSearch])


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            let listIDs = CURRENT_SETS.folderList?.filter(folder => folder.name === folderName)[0].setListIDs as string[]
            setSetListIDs(listIDs)
            listIDs.length == 0 ? setIsFolderEdit(true) : null
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        // const unsubscribe = navigation.addListener('focus', () => {
        let list: SetFormat[] = []
        let listSaved: boolean[] = []
        setListIDs.forEach(id => {
            let item = CURRENT_SETS.all.filter(set => set.id === id)[0]
            list.push(item)
            item.isSaved ? listSaved.push(true) : listSaved.push(false)
        });
        setSetList(list)
        setSetListSaved(listSaved)
        // });
        // return unsubscribe;
    }, [navigation, setListIDs]);

    function saveFolderEdit() {
        setIsFolderEdit(!isFolderEdit)
    }

    function dispatchFnc(item: SetFormat) {
        dispatch(setAsCurrent(item))
    }

    function navSet() {
        navigation.navigate('SetView' as never)
    }

    function cancelSearch() {
        setSetSearchResult([]);
        setSetSearch('');
        setSETID(null);
        setSetName(null);
        setCreateFolderSetList([]);
    }

    function renderAddSetBtn() {
        return <RoundBtn
            title='Add more Set'
            onPress={() => {
                setIsShowPopup(true)
            }}
            bgColor={clrStyle.you}
            textClass={Lex16BoldAuto}
            customStyle={[styles.marginTop4vw, styles.marginBottom8vw, styles.flex0, styles.paddingH8vw]}
        />
    }

    class AddPopup extends React.Component {
        render(): React.ReactNode {
            return (
                <ViewColCenter customStyle={[styles.flex1, styles.positionAbsolute, { top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }]}>
                    <View>
                        <View style={[styles.w80vw, { backgroundColor: clrStyle.white, zIndex: 2, maxHeight: vh(70), borderRadius: vw(8), overflow: 'hidden' }]}>
                            <View style={[styles.paddingV6vw, { backgroundColor: clrStyle.pur1, borderBottomRightRadius: vw(3), borderBottomLeftRadius: vw(3) }]} >
                                <Pay20BlackLine122 style={[styles.textCenter, { color: clrStyle.white }]}>Add Set to Folder</Pay20BlackLine122>
                            </View>
                            <ScrollView style={[styles.paddingV4vw]} contentContainerStyle={{ flexGrow: 1 }}>
                                {/* >> */}

                                <View style={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: clrStyle.white }]}>
                                    <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                                        <Lex16RegAuto style={[styles.paddingH1vw, { color: clrStyle.you }]}>Select one first Set to add to Folder (optional)</Lex16RegAuto>
                                        <SearchBox
                                            value={setSearch}
                                            onChangeText={setSetSearch}
                                            onClear={() => { setSetSearch(''); setSETID(null); setSetName('') }}
                                            customStyle={[styles.paddingV2vw,]}
                                            placeholder={setName as string}
                                            placeholderTextColor={clrStyle.black}
                                        />
                                        {
                                            setSearchResult.length > 0 ?
                                                setSearchResult.map((set, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            key={index}
                                                            onPress={() => {
                                                                setSETID(set.id)
                                                                setSetName(set.name)
                                                                setSetSearch('')
                                                                setCreateFolderSetList([...CreateFolderSetList, set.id])
                                                            }}
                                                            style={[styles.padding2vw, { backgroundColor: clrStyle.you }]}>
                                                            <Lex14RegAuto>{set.name}</Lex14RegAuto>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                                :
                                                setSearch ? <Lex14RegAuto>No set found</Lex14RegAuto> : null
                                        }
                                    </View>
                                </View>

                                {/* >> */}
                            </ScrollView>
                            <TouchableOpacity
                                onPress={() => {
                                    let newFolder: FolderFormat | undefined = CURRENT_SETS.folderList?.filter(folder => folder.name === folderName)[0]
                                    if (newFolder) {
                                        let existingSets = newFolder.setListIDs.filter(id => CreateFolderSetList.includes(id));
                                        if (existingSets.length > 0) {
                                            Alert.alert("Duplicate Sets", "Some sets are already in the folder.", [
                                                { text: "OK", onPress: () => cancelSearch() }
                                            ]);
                                            return;
                                        }
                                        newFolder.setListIDs = [...newFolder.setListIDs, ...CreateFolderSetList];
                                        function dispatchFnc(item: FolderFormat) {
                                            currentEditFolderItemInList(item);
                                        }
                                        editFolderFnc(newFolder.name, newFolder, dispatchFnc);
                                        setSetListIDs(newFolder.setListIDs);
                                        cancelSearch();
                                    }
                                    setIsShowPopup(false)
                                }}
                                style={[styles.paddingV4vw, { backgroundColor: clrStyle.pur1, borderTopRightRadius: vw(3), borderTopLeftRadius: vw(3) }]} >
                                <Pay20BlackLine122 style={[styles.textCenter, { color: clrStyle.white }]}>Done</Pay20BlackLine122>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => { setIsShowPopup(false); cancelSearch() }}
                            style={[styles.positionAbsolute, styles.borderRadius10, styles.padding1vw, { top: -vw(12), right: -vw(4), backgroundColor: clrStyle.redA }]}>
                            {xIcon(vw(8), vw(8), 'white')}
                        </TouchableOpacity>
                    </View>
                </ViewColCenter>
            )
        }
    }

    function renderEditFolder() {
        return (
            <ViewColBetweenCenter customStyle={[styles.flex1]}>
                <ScrollView style={[styles.w100]}>
                    {setList.length == 0 ? <Lex16RegAuto style={[styles.textCenter, styles.marginTop4vw]}>No Set in this folder. Please add some</Lex16RegAuto> :
                        setList.map((item, index) => {
                            return (
                                <ViewRowBetweenCenter key={index} customStyle={[styles.paddingV2vw, styles.gap1vw, styles.marginTop4vw, { borderColor: clrStyle.neu3, borderBottomWidth: vw(1) }]}>
                                    <Lex16RegAuto style={[styles.flex1, { color: clrStyle.black }]}>{item.name}</Lex16RegAuto>
                                    <Lex16RegAuto style={[{ color: clrStyle.neu2 }]}>{item.deskList.length} {item.deskList.length > 1 ? `desks` : `desk`}</Lex16RegAuto>
                                    <TouchableOpacity
                                        onPress={() => {
                                            Alert.alert(
                                                "Remove Set from Folder",
                                                "Are you sure you want to remove this set?",
                                                [
                                                    {
                                                        text: "Cancel",
                                                        onPress: () => console.log("Cancel Pressed"),
                                                        style: "cancel"
                                                    },
                                                    {
                                                        text: "OK", onPress: () => {
                                                            let newFolder: FolderFormat | undefined = CURRENT_SETS.folderList?.filter(folder => folder.name === folderName)[0]
                                                            if (newFolder) {
                                                                newFolder.setListIDs = newFolder.setListIDs.filter(id => id !== item.id)
                                                                function dispatchFnc(item: FolderFormat) {
                                                                    currentEditFolderItemInList(item)
                                                                }
                                                                editFolderFnc(newFolder.name, newFolder, dispatchFnc)
                                                                setSetListIDs(newFolder.setListIDs)
                                                            }
                                                        }
                                                    }
                                                ]
                                            );
                                        }}
                                        style={[styles.padding1vw, styles.borderRadius10, styles.marginLeft1vw, { backgroundColor: clrStyle.redA }]}>
                                        {xIcon(vw(6), vw(6), 'white')}
                                    </TouchableOpacity>
                                </ViewRowBetweenCenter>
                            )
                        }
                        )
                    }
                    {marginBottomForScrollView(2)}
                </ScrollView>
                {renderAddSetBtn()}
            </ViewColBetweenCenter>
        )
    }

    return (
        <SSBar barContentStyle='light-content' trans barColor={'rgba(0,0,0,0)'} notMargin bgColor={clrStyle.white}>
            <TopNav2
                title={`Folder View`}
                subTitle={folderName && cate ? `${cate} \\ ${folderName}` : 'Folder'}
                textColor='white'
                backGoundImage={currentFolder?.photoAddress ? currentFolder.photoAddress : `../assets/image/topNav.png`}
                leftIcon={sharpLeftArrow(vw(8), vw(8), 'white')}
                leftIconFnc={() => navigation.goBack()}
                rightIcon={isFolderEdit ? doneEditIcon(vw(8), vw(8), 'white') : deskCardEditIcon(vw(8), vw(8), 'white')}
                rightIconFnc={() => { saveFolderEdit() }}
                containerStyle={[styles.h20vh, styles.flexCol, styles.gap2vw, { justifyContent: 'flex-end' }]}
                darkenColor='#6B61A8D1'
            />
            {isShowPopup ? <AddPopup /> : null}
            <View style={[styles.flex1, styles.paddingH6vw]}>
                { }
                {isFolderEdit ? renderEditFolder() : showSetCardGray(setList, setListSaved, setSetListSaved, dispatchFnc, navSet)}
                {setList.length === 0 && !isFolderEdit ? renderAddSetBtn() : null}
            </View>
        </SSBar>
    )
}