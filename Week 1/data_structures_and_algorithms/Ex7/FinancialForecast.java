public class FinancialForecast {

    public static double calculateFutureValue(double currentValue,
                                              double growthRate,
                                              int years) {

        // Base Case
        if (years == 0) {
            return currentValue;
        }

        // Recursive Call
        return calculateFutureValue(
                currentValue,
                growthRate,
                years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double initialValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue = calculateFutureValue(
                initialValue,
                growthRate,
                years);

        System.out.println("Predicted Future Value after "
                + years + " years: ₹"
                + futureValue);
    }
}