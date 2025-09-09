public class Student {
    private String name;
    private int date;
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setDate(int date) {
        this.date = date;
    }
    
    public Student() {
      setName("Rodion");  
      setDate(2007);
    }
}