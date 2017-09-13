// State and action are always passed in reducers.
import actions from './actions';

export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    PLANET_EARTH: 'PLANET_EARTH',
    PLANET_THE_SUN: 'PLANET_THE_SUN'
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
            return state.map( (crewMember) => {
                // if the id matches, then update the location, ottherwise just return the crewMember.
                if (action.id === crewMember.id) {
                    //make a copy maybe???? of the crewMember
                    //but changing the location
                    // if (action.location in LOCATIONS) {

                    // }

                    let newLocation = crewMember.location;
                    if (action.location in LOCATIONS) {
                        newLocation = action.location;
                    }

                    // ** Longer version of Object "cloning".
                    // return Object.assign({}, crewMember, {
                    //     location: action.location
                    // });
                
                // This is equivalent to above.
                return {
                    ...crewMember,
                    location: newLocation
                }


                } else {
                    return crewMember;
                }
            });
        default:
            return state;
        }
    }

export default crewMembers;
