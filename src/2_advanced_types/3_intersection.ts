// suppose if something can have multiple features , like phone , it can be used for calling and also for entertainment.
type Callable = {
    call: () => void
}

type PlayGame = {
    play: () => void
}

type Phone = Callable & PlayGame

// have to implment funciton of both Callable and PlyaGame
let nokiaPhone: Phone = {
    call() {
        console.log("Calling from Nokia");

    },
    play() {
        console.log("Playing game in nokia phone");

    },
}

nokiaPhone.play();
nokiaPhone.call();