// Tip #1: Make constants for your action type strings.


// This is what we want to produce as an action object:
// {
//     type: ADD_MEMBER,
//     name: 'crusher',
//     rank: 'chief medical officer'
// }

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';

export default {
    ADD_MEMBER,
    BEAM_MEMBER,
}