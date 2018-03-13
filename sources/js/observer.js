// //mini_cal = [{"event":'event', "action":'action'}];
// //actions = [{"event":'event',"subscribers":'a, b, c, d'}];
// function perform_action (){
//
// }
// function subscribe (subscriber, event, action, subcriber_name) {
//     subscriber.push({
//         "event": event,
//         "action": action
//     });
//     for (var i = 0; i < actions.length; i++) {
//         if (actions[i].event === event) {
//             actions[i].subscribers + ',' + subscriber_name;
//         }
//     }
// }
//
// function sendEvent (dispatcher, event){
//     for (var i = 0; i < store.length;i++){
//         if (store[i].event === event){
//             perform action
//         }
//     }
// }
//
// function addEvent (dispatcher, event){
//     dispatcher.push(event);
// }
count = 0;

function print(value) {
    document.getElementById('printer').innerText += '\n' + count + ' ' + value;
    count++;
}

store = {};
subsStore = {};

function intiStore() {
    store = {
        'mini_cal': {
            val: 12
        }
    }
}

// intiStore();
print('Store: ' + JSON.stringify(store));



function subscribe (who, what, callback) {
    var hasSubs = Object.keys(subsStore).includes(what);

    if(hasSubs) {
        subsStore[what][who] = callback;
    } else {
        subsStore[what] = {};
        subsStore[what][who] = callback;
    }

    print('List of subscribers: ' + JSON.stringify(subsStore));
}

function dispatch(what, data) {
    var isAnySubscribed = Object.keys(subsStore).includes(what);

    store[what] = data;

    print(JSON.stringify(store));

    if (isAnySubscribed) {
        var subscribers = Object.keys(subsStore[what]);
        for(var i = 0; i < subscribers.length; i++) {
            subsStore[what][subscribers[i]](store[what]);
        }
    }
}

function MiniCalendar() {
    this.updateMiniCall = function() {
        if(store['mini_cal']) {
            dispatch('mini_cal', {val: parseInt(store['mini_cal'].val) + 1});
        } else {
            dispatch('mini_cal', {val:  1})
        }
    }

    this.callback = function(value) {
        document.getElementById('calendar').innerText = 'mini is' +  value;
    }

    subscribe('mini_cal', 'sidebar',this.callback);
}

function Calendar() {
    this.callback = function (value) {
        document.getElementById('calendar').innerText = 'mini_callvalue changed to ' + value.val;
    }

    subscribe('calendar', 'mini_cal',this.callback);
}

function Sidebar() {
    this.count = 0;

    this.callback = function (value) {
        document.getElementById('sidebar').innerText = 'mini_callvalue changed to ' + value.val;
    }

    this.addCalendar = function () {
        this.count += 1;
        dispatch('sidebar', this.count);
    }

    subscribe('sidebar', 'mini_cal',this.callback);
}

miniCalendar = new MiniCalendar();
calendar = new Calendar();
sidebar = new Sidebar();

