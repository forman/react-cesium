import Patch from './patch.js';

export default {
    calculatePatches(currentState, nextState) {
        let patches = [];

        currentState.cities.forEach((currCity, index) => {
            let nextCity = nextState.cities[index];

            if (currCity.visible !== nextCity.visible) {
                patches.push(Patch.patch({
                    id: currCity.id,
                    attribute: 'visible',
                    nextValue: nextCity.visible
                }));
            }
            // else if (currCity.name !== nextCity.name) { .. and so on .. }
        });

        return patches;
    }
}
