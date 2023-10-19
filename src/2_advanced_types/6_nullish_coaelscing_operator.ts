// this is used in scenario where if use fallback values if our variable is falsy
// falsy mean variale can have these values : (undefined,null,'',false,0)

let speed: number | null | undefined = null;
let ride = {
    // Falsy (undefined,null,'',false,0)
    // speed: speed || 30 // js way
    mySpeed: speed ?? 30

}
 




