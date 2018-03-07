mini_cal = [{"event":'event', "action":'action'}];
actions = [{"event":'event',"subscribers":'a, b, c, d'}];
function perform_action (){

}
function subscribe (subscriber, event, action, subcriber_name) {
    subscriber.push({
        "event": event,
        "action": action
    });
    for (var i = 0; i < actions.length; i++) {
        if (actions[i].event === event) {
            actions[i].subscribers + ',' + subscriber_name;
        }
    }
}

function sendEvent (dispatcher, event){
    for (var i = 0; i < store.length;i++){
        if (store[i].event === event){
            perform action
        }
    }
}

function addEvent (dispatcher, event){
    dispatcher.push(event);
}