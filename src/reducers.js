// State and action are always passed in reducers.
import { combineReducers } from 'redux';
import actions from './actions';

export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH: 'PLANET_EARTH',
    PLANET_THE_SUN: 'PLANET_THE_SUN'
}

const ships = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_SHIP:
            return [
                ...state, 
                {
                    id: action.id,
                    name: action.name
                }
            ]
        default:
        return state;
}

const crewMembers = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_MEMBER:
            // return state.concat({
            // NICE IMMUTABLE WAY TO ADD ON TO AN ARRAY!!!!!
            //     name: action.name,
            //     rank: action.rank,
            //     id: action.id,
            //     location: action.location
            // });



        // Equivalent to state.concat version, but using the array spread operator.
        return [
            ...state,
            {
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
            }
        ]
        
        case actions.BEAM_MEMBER:
            return state.map( (crewMembers) => {
                // if the id matches, then update the location, ottherwise just return the crewMember.
                if (action.id === crewMembers.id) {
                    //make a copy maybe???? of the crewMember
                    //but changing the location
                    // if (action.location in LOCATIONS) {

                    // }

                    let newLocation = crewMembers.location;
                    if (action.location in LOCATIONS) {
                        newLocation = action.location;
                    }

                    // ** Longer version of Object "cloning".
                    // return Object.assign({}, crewMember, {
                    //     location: action.location
                    // });
                
                // This is equivalent to above.
                return {
                    ...crewMembers,
                    location: newLocation
                }


                } else {
                    return crewMembers;
                }
            });
        default:
            return state;
        }
    }

export default combineReducers({
    ships,
    crewMembers
});
