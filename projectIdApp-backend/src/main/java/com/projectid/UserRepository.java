package com.projectid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by arielfernandez on 5/6/17.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
