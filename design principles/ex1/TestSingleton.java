
class Logger {
    private static Logger instance;
    
    private Logger() {
    }
    
    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
    
    public void logError(String message) {
        System.err.println("[ERROR] " + message);
    }
    
    public void logWarning(String message) {
        System.out.println("[WARNING] " + message);
    }
}

public class TestSingleton {
    public static void main(String[] args) {
        // Get instance
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        
        // Verify they're the same instance
        System.out.println("logger1 == logger2: " + (logger1 == logger2));
        System.out.println("logger1 hashCode: " + logger1.hashCode());
        System.out.println("logger2 hashCode: " + logger2.hashCode());
        
        // Use the logger
        logger1.log("Application started");
        logger2.logWarning("This is a warning");
        logger1.logError("This is an error");
        
        System.out.println("\nBoth loggers are the same instance!");
    }
}