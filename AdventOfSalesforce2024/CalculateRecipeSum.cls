/**
 * No metadata file exists for this class. Do not attempt to push without first creating an xml file for this class.
 */
public class CalculateRecipeSum {
    public Integer calculateRecipeSum(List<String> recipeLines) {
        List<Integer> measurements = new List<Integer>();
        for (String line : recipeLines) {
            Pattern cipher = Pattern.compile('[a-zA-Z\\.\\&\\-\\ ]+');
            String decipheredLine = cipher.matcher(line).replaceAll('');
            decipheredLine = decipheredLine.left(1) + decipheredLine.right(1);
            measurements.add(Integer.valueOf(decipheredLine));
        }
        Integer sum = 0;
        for (Integer i : measurements) {
            sum += i;
        }
        return sum;
    }
}