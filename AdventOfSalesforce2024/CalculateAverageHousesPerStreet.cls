/**
 * No metadata file exists for this class. Do not attempt to push without first creating an xml file for this class.
 */
public class CalculateAverageHousesPerStreet {
    public Decimal calculateAverageHousesPerStreet(List<Integer> streetHouseCounts){
        if (streetHouseCounts != null && !streetHouseCounts.isEmpty()) {
            Integer sum = 0;
            for (Integer i : streetHouseCounts) {
                sum += i;
            }
            return Decimal.valueOf(((Double) sum) / streetHouseCounts.size());
        } else {
            return 0.0;
        }
    }
}