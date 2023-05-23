package org.rally.backend.restaurantarm.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

@Entity
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Size(min = 3, message = "Name must be at least 3 characters long")
  private String review;
  private String name;
  private Integer restaurantId;




  public Review(String name, String review, Integer restaurantId) {
    this.name =name;
    this.review = review;
    this.restaurantId=restaurantId;
  }
  public Review() {}

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }

  public Integer getRestaurantId() {
    return restaurantId;
  }

  public void setRestaurant(Integer restaurantId) {
    this.restaurantId = restaurantId;
  }

  public int getId() {
    return id;
  }
  @Override
  public String toString() {
    return review;
  }
}
