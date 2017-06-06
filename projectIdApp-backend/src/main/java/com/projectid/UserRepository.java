package com.projectid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by arielfernandez on 5/6/17.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /*@Modifying
    @Query("update users u set u.name=:name, u.surname=:surname, u.address=:address, u.country=:country, " +
            "u.phone=:phone, u.mobile=:mobile, u.email=:email where u.id=:id")
    public void updateUser(@Param("id") Long id, @Param("name") String name, @Param("surname") String surname,
                           @Param("address") String address, @Param("country") String country, @Param("phone") String phone,
                           @Param("mobile") String mobile, @Param("email") String email);*/

}
