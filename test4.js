/*[{
"id": "Plant1",
"productionSteps": [
{"step": "Step1", "time": 5},
{"step": "Step2", "time": 7},
{"step": "Step3", "time": 2}
]
},
{
"id": "Plant2",
"productionSteps": [
{"step": "StepA", "time": 3},
{"step": "StepB", "time": 4},
{"step": "StepC", "time": 8}
]
}
]
s2
*/
async function processObject(id){
    console.log(id)
    await wait(5000);
    console.log(obj)
}
//need to figure out how await actually works on given obj
