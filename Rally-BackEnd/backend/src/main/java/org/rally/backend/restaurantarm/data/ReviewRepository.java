package org.rally.backend.restaurantarm.data;
import org.rally.backend.restaurantarm.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer> {
  Optional<Review> findByRestaurantId(Integer integer);

}
