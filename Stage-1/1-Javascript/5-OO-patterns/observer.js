

/*


  door

    - open
    - close

   light
   ac
   fan


*/


//--------------------------------------
// light
//--------------------------------------

const light = {
    on(event) {
        console.log("light ON " + event.doorNumber + " : " + event.floorNumber);
    },
    off(event) {
        console.log("light OFF");
    }
}

//------------------------------------
// fan
//--------------------------------------

const fan = {
    on(event) {
        console.log("fan ON");
    },
    off(event) {
        console.log("fan OFF");
    }
}


//------------------------------------
// ac
//--------------------------------------

const ac = {
    on(event) {
        console.log("ac ON");
    },
    off(event) {
        console.log("ac OFF");
    }
}

//------------------------------------
// Door
//--------------------------------------

const door = {
    doorListeners: [],
    addDoorListener(listener) {
        this.doorListeners.push(listener)
    },
    removeDoorListsnser(listener) {
        //...
    },
    open() {
        console.log("door opened..");
        const event = { type: 'open', doorNumber: 1, floorNumber: 2 }
        this.doorListeners.forEach(listener => {
            listener.on(event)
        })
    },
    close() {
        console.log("door closed");
        const event = { type: 'open', doorNumber: 1, floorNumber: 2 }
        this.doorListeners.forEach(listener => {
            listener.off(event)
        })
    }
}

//--------------------------------------------


/*

// design issues in door module 
    => subject i.e door & dependents i.e light,ac objects are tightly coupled
        cause : can't extend/remove with features easily
     OO principles:
        => open for extension , closed for modification
     solution : observer pattern

*/

//--------------------------------------------



door.addDoorListener(light)
door.addDoorListener(fan)
door.addDoorListener(ac)

door.removeDoorListsnser(ac)

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close()
    }, 3000);
}, 3000);