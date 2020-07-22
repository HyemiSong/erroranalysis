import _faceAPI from './data/FaceAPI_azure_error_nodetection_extended_small_mlads.json';

//parsing csv via fetch
// const _faceAPI = './data/FaceAPI_azure_error_nodetection_extended_small_mlads.csv';
// const getData = () => fetch(_faceAPI)
// .then(response => response.text())
const d = data => {
    return data.length
}
console.log(d(_faceAPI))
const defaultData = d(_faceAPI)
export {_faceAPI, defaultData}