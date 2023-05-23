package org.rally.backend.restaurantarm.models;

public class ReviewDTO {
  private String description;
  private String name;
  private Integer restaurantId;

  public ReviewDTO(String description, String name, Integer restaurantId) {
    this.description = description;
    this.name = name;
    this.restaurantId= restaurantId;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getRestaurantId() {
    return restaurantId;
  }

  public void setRestaurantId(Integer restaurantId) {
    this.restaurantId = restaurantId;
  }
}
