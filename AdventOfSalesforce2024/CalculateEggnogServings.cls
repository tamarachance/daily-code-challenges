/**
 * No metadata file exists for this class. Do not attempt to push without first creating an xml file for this class.
 */
public class CalculateEggnogServings {
    public Integer calculateEggnogServings(Integer milk, Integer cream, Integer eggs, Integer sugar) {
        milk = Math.floor(milk / 2).intValue();
        cream = Math.floor(cream / 1).intValue();
        eggs = Math.floor(eggs / 3).intValue();
        sugar = Math.floor(sugar / .25).intValue();
        List<Integer> servings = new List<Integer>{milk, cream, eggs, sugar};
        servings.sort();
        Integer minServing = servings[0];
        return minServing;
    }
}