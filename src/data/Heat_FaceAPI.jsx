import file1 from "./Heat_FaceAPI/Gender/gender_female.json"
import file2 from "./Heat_FaceAPI/Gender/gender_male.json"
import file3 from "./Heat_FaceAPI/Gender_Skin/female_some.json"
import file4 from "./Heat_FaceAPI/Gender_Skin/female_yes.json"
import file5 from "./Heat_FaceAPI/Gender_Skin/male_some.json"
import file6 from "./Heat_FaceAPI/Gender_Skin/male_yes.json"

export default function Heat_FaceAPI(){
    let data = [file1,file2,file3,file4,file5,file6]
    let gender = 
    [
        {feature1:" ", feature2:"gender_gt", value1:"female", value2: " ", error:11, data:file1},
        {feature1:" ", feature2:"gender_gt", value1:"male", value2: " ", error:1, data:file2}
    ]
    //[gender_female,gender_male]
    let gender_skin = 
    [
        {feature1:"face_light_gt", feature2:"gender_gt", value1:"female", value2: "some", error:9, data:file3},
        {feature1:"face_light_gt", feature2:"gender_gt", value1:"male", value2: "some", error:0, data:file5},
        {feature1:"face_light_gt", feature2:"gender_gt", value1:"female", value2: "yes", error:12, data:file4},
        {feature1:"face_light_gt", feature2:"gender_gt", value1:"male", value2: "yes", error:1, data:file6}
    ]

   // console.log(gender_skin[0].data)
    return gender_skin
}