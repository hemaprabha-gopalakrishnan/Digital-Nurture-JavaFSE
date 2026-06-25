// File: TestFactoryMethod.java

interface Document {
    void open();
    void close();
    void save();
}

class WordDocument implements Document {
    @Override
    public void open() { System.out.println("Opening Word Document..."); }
    @Override
    public void close() { System.out.println("Closing Word Document..."); }
    @Override
    public void save() { System.out.println("Saving Word Document as .docx"); }
}

class PdfDocument implements Document {
    @Override
    public void open() { System.out.println("Opening PDF Document..."); }
    @Override
    public void close() { System.out.println("Closing PDF Document..."); }
    @Override
    public void save() { System.out.println("Saving PDF Document as .pdf"); }
}

class ExcelDocument implements Document {
    @Override
    public void open() { System.out.println("Opening Excel Document..."); }
    @Override
    public void close() { System.out.println("Closing Excel Document..."); }
    @Override
    public void save() { System.out.println("Saving Excel Document as .xlsx"); }
}

abstract class DocumentFactory {
    public abstract Document createDocument();
}

class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() { return new WordDocument(); }
}

class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() { return new PdfDocument(); }
}

class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() { return new ExcelDocument(); }
}

public class TestFactoryMethod {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();
        wordDoc.save();
        wordDoc.close();

        System.out.println();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();
        pdfDoc.save();
        pdfDoc.close();

        System.out.println();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
        excelDoc.save();
        excelDoc.close();
    }
}