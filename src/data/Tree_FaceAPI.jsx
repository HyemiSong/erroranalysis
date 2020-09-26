
import file1 from "./Tree_FaceAPI/0-68-1.json"
import file2 from "./Tree_FaceAPI/1-F-63-2.json"
import file3 from "./Tree_FaceAPI/1-T-5-3.json"
import file4 from "./Tree_FaceAPI/2-F-F-52-4.json"
import file5 from "./Tree_FaceAPI/2-F-T-11-5.json"
import file6 from "./Tree_FaceAPI/2-T-F-1-6.json"
import file7 from "./Tree_FaceAPI/2-T-T-4-7.json"
import file8 from "./Tree_FaceAPI/3-F-F-F-41-8.json"
import file9 from "./Tree_FaceAPI/3-F-F-T-11-9.json"
import file10 from "./Tree_FaceAPI/3-F-T-G-2-10.json"
import file11 from "./Tree_FaceAPI/3-F-T-L-9-11.json"
import file12 from "./Tree_FaceAPI/4-F-F-F-G-23-12.json"
import file13 from "./Tree_FaceAPI/4-F-F-F-L-18-13.json"
import file14 from "./Tree_FaceAPI/4-F-F-T-G-3-14.json"
import file15 from "./Tree_FaceAPI/4-F-F-T-L-8-15.json"
import file16 from "./Tree_FaceAPI/4-F-T-G-F-0-16.json"
import file17 from "./Tree_FaceAPI/4-F-T-G-T-2-17.json"
import file18 from "./Tree_FaceAPI/4-F-T-L-F-6-18.json"
import file19 from "./Tree_FaceAPI/4-F-T-L-T-3-19.json"
import file20 from "./Tree_FaceAPI/5-F-F-F-G-G-20-20.json"
import file21 from "./Tree_FaceAPI/5-F-F-F-G-L-3-21.json"
import file22 from "./Tree_FaceAPI/5-F-F-F-L-G-12-22.json"
import file23 from "./Tree_FaceAPI/5-F-F-F-L-L-6-23.json"
import file24 from "./Tree_FaceAPI/5-F-F-T-G-G-3-24.json"
import file25 from "./Tree_FaceAPI/5-F-F-T-G-L-0-25.json"
import file26 from "./Tree_FaceAPI/5-F-T-G-T-G-2-26.json"
import file27 from "./Tree_FaceAPI/5-F-T-G-T-L-1-27.json"
import file28 from "./Tree_FaceAPI/6-F-F-F-G-G-G-8-28.json"
import file29 from "./Tree_FaceAPI/6-F-F-F-G-G-L-12-29.json"
import file30 from "./Tree_FaceAPI/7-F-F-F-G-G-G-G-6-30.json"
import file31 from "./Tree_FaceAPI/7-F-F-F-G-G-G-L-2-31.json"
import { packEnclose } from "d3"

export default function Tree_FaceAPI(){
    let fileName=
        ["0-68-1",
        "1-F-63-2",
        "1-T-5-3",
        "2-F-F-52-4",
        "2-F-T-11-5",
        "2-T-F-1-6",
        "2-T-T-4-7",
        "3-F-F-F-41-8",
        "3-F-F-T-11-9",
        "3-F-T-G-2-10",
        "3-F-T-L-9-11",
        "4-F-F-F-G-23-12",
        "4-F-F-F-L-18-13",
        "4-F-F-T-G-3-14",
        "4-F-F-T-L-8-15",
        "4-F-T-G-F-0-16",
        "4-F-T-G-T-2-17",
        "4-F-T-L-F-6-18",
        "4-F-T-L-T-3-19",
        "5-F-F-F-G-G-20-20",
        "5-F-F-F-G-L-3-21",
        "5-F-F-F-L-G-12-22",
        "5-F-F-F-L-L-6-23",
        "5-F-F-T-G-G-3-24",
        "5-F-F-T-G-L-0-25",
        "5-F-T-G-T-G-2-26",
        "5-F-T-G-T-L-1-27",
        "6-F-F-F-G-G-G-8-28",
        "6-F-F-F-G-G-L-12-29",
        "7-F-F-F-G-G-G-G-6-30",
        "7-F-F-F-G-G-G-L-2-31"]
    let fileNameArr = fileName.map(ele => ele.split("-"))
    let data = [file1,file2,file3,file4,file5,file6,file7,file8,file9,file10,file11,file12,file13,file14,file15,file16,file17,file18,file19,file20,file21,file22,file23,file24,file25,file26,file27,file28,file29,file30,file31]
    let _data = [];
    let treeMapData = [];

    //_data
    for(let i=0; i < data.length; i++){
        _data.push({
            "id": fileName[i],
            "FeatureImportance":data[i][0].FeatureImportance,
            "PredictionPath":data[i][0].PredictionPath,
            "level":level(fileName[i]),
            "parentId":parentId(fileName[i],data[i]),
            "size":data[i].length,
            "success":successError(data[i]).success.length,
            "error":successError(data[i]).error.length,
            "nodeIndex":i
        })
    }

    //_data + children
    for(let i=0; i <_data.length; i++){
        let children = [];
        let setAncestors = function(o){
            for(let j=0; j <_data.length; j++){
                if(_data[j].parentId === o.id){
                    //console.log(_data[j].parentId, o.id)
                    children.push(_data[j])
                }
            }
        }
        setAncestors(_data[i])
        _data[i]["children"] = children
        //console.log(children, i)
    }

    //treeMapdata
    treeMapData = _data[0];
    
    //_data + functions
    function level(d){
        return d.split("-")[0]
    }
    function parentId(name, data){
        let parentIndex = " ";
        let nameSplit = name.split("-");
        let parentLevel = Number(name.split("-")[0])-1;

        for(let i=0; i < data.length; i++){
            parentIndex = (parentLevel < 0) ? undefined : compareID(indexFinder(parentLevel, nameSplit), parentLevel)
        }

        function indexFinder(parentLevel, nameSplit){
            let name = [parentLevel];
            for(let i=1; i < parentLevel+1; i++){
                name.push(nameSplit[i])
            }
            return name.join("-")
        }

        function compareID(name, parentLevel){
            let parent = "";
            for(let i=0; i < fileNameArr.length; i++){
                if(Number(fileNameArr[i][0]) === parentLevel){
                     let arr = [];
                     for(let j=0; j < parentLevel+1; j++){
                        arr.push(fileNameArr[i][j])
                     }
                     if(arr.join("-") === name){
                        parent = fileNameArr[i].join("-")
                     }
                     //console.log(arr.join("-"), parentLevel, name);
                }
            }
            return parent
        }
        return parentIndex
    }
    function successError(d){
        let success = d.filter(ele => (ele.Label === "TRUE"))
        let error = d.filter(ele => (ele.Label === "FALSE"))
        let data = {"success":success, "error":error}
        return data
    }
    //console.log(_data)
    return treeMapData
}