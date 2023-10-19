class KeyValuePair<K, V>{
    constructor(public key: K, public value: V) { }
}

let kp1 = new KeyValuePair<string, string>("key", "value");

//* we can see how compiler infer the type of key value for us
let kp2 = new KeyValuePair("key2", "value2");
// kp2.key = 123 // !error
let kp3 = new KeyValuePair("key2", 3);