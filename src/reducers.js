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
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
            });
        case actions.BEAM_MEMBER:
            return state.map( (crewMember) => {
                // if the id matches, then update the location, ottherwise just return the crewMember.
                if (action.id === crewMember.id && action.location in LOCATIONS) {
                    //make a copy maybe???? of the crewMember
                    //but changing the location
                    // if (action.location in LOCATIONS) {

                    // }
                    return Object.assign({}, crewMember, {
                        location: action.location
                    });
                } else {
                    return crewMember;
                }
            });
        default:
            return state;
        }
    }

export default crewMembers;
