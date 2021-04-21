
const Rx = require('rxjs')
const { pipe } = Rx;
const { filter, map, buffer } = require('rxjs/operators')


//------------------------------------------------
// Trainer
//------------------------------------------------

const trainer = {
    getTopics() {

        const stream = new Rx.Subject() // 

        let topic = 0;
        let intervalId = setInterval(() => {
            topic++;

            if (topic === 3) {
                stream.error('n/w issue')
                clearInterval(intervalId);
                topic = 0;
                return;
            }

            if (topic === 10) {
                console.log("trainer closing stream")
                stream.complete();
                clearInterval(intervalId);
                topic = 0;
                return;
            }

            console.log("trainer propagating change/event/data into stream")
            stream.next(topic);// push change/event into stream

        }, 2000);


        return stream;
    }
}


//------------------------------------------------
// Student
//------------------------------------------------

const student1 = {
    doLearnAndPratice() {

        const stream = trainer.getTopics()
        stream
            .pipe(filter(topic => topic % 2 === 0))
            .pipe(map(topic => topic * topic))
            .subscribe(
                topic => console.log("student1 learning topic :" + topic),
                error => console.log("student1 reacting to topic error " + error),
                () => console.log("student1 : thanks tnr for all topics")
            );

        console.log("stud...");

    }
}

student1.doLearnAndPratice()

