package org.rally.backend.restaurantarm;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String restauntName;
  private String address;
  private String conactInfo;
  private String neighborhood;
  private String restaurantType;

  public Restaurant(String restauntName, String address, String conactInfo, String neighborhood, String restaurantType) {
    this.restauntName = restauntName;
    this.address = address;
    this.conactInfo = conactInfo;
    this.neighborhood = neighborhood;
    this.restaurantType = restaurantType;
  }


  public String getConactInfo() {
    return conactInfo;
  }

  public void setConactInfo(String conactInfo) {
    this.conactInfo = conactInfo;
  }

  public String getNeighborhood() {
    return neighborhood;
  }

  public void setNeighborhood(String neighborhood) {
    this.neighborhood = neighborhood;
  }


  public Restaurant(){}

  public int getId() {
    return id;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getRestauntName() {
    return restauntName;
  }

  public void setRestauntName(String restauntName) {
    this.restauntName = restauntName;
  }

  public String getRestaurantType() {
    return restaurantType;
  }

  public void setRestaurantType(String restaurantType) {
    this.restaurantType = restaurantType;
  }
}
