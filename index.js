function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    return function returnsANamedFunction(){};
}
function returnsAnAnonymousFunction(){
    return function (){};
}