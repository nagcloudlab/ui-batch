

//-----------------------------------
// Trainer
//-----------------------------------
const trainer = {
    getSubjectSync() {
        // 10s
        return "Subject-1"
    },
    getSubjectAsync() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("");
                // console.log("trainer resolving promise..")
                // const subject = "Subject-1"
                // resolve(subject)// push
                console.log("trainer rejecting promise..")
                const error = 'ooops'
                reject(error)

            }, 5000)
        });
        return promise;
    }
}
//-----------------------------------
// E-Learing
//-----------------------------------
const eLearing = {
    getSubjectAync() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("");

                console.log("eLearing resolving promise..")
                const subject = "Subject-2"
                resolve(subject)// push

                // console.log("eLearing rejecting promise..")
                // const error = 'ooops'
                // reject(error)

            }, 2000)
        });
        return promise;
    }
}
//-----------------------------------
// Employee
//-----------------------------------

const employee1 = {
    doLearnAndWorkV1() {
        // step-1
        console.log("step-1");
        console.log("employee request subject on trainer...")
        const subject = trainer.getSubjectSync() // pull / blocking / sync
        console.log("employee got subject from trainer");
        console.log("employee recting/learning sub : " + subject);
        // step-2
        console.log("");
        console.log("step-2");
        console.log("with other work....")
        //...
    },
    doLearnAndWorkV2() {
        // step-1
        console.log("step-1");
        console.log("employee request subject on trainer...& E-Learing")

        const promise1 = trainer.getSubjectAsync()
        const promise2 = eLearing.getSubjectAync()

        console.log("employee got promise, defering learning actions to future/");
        Promise.all([promise1, promise2])
            .then(subjects => {
                console.log("employee enriching subjects : ");
                return subjects[0].toUpperCase() + "," + subjects[1].toUpperCase()
            })
            .then(enrichedSubjects => {
                console.log("employee learning enriched subjects : " + enrichedSubjects);
            })
            .catch(error => {
                console.log("employee reacting to error : " + error)
            })
        // step-2
        console.log("");
        console.log("step-2");
        console.log("with other work....")
        //...
    }

}

//-----------------------------------

employee1.doLearnAndWorkV2()