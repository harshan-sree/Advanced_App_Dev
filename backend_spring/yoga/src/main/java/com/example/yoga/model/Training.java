package com.example.yoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Training_details")
@Entity
public class Training {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String TrainingName;
    private String Duration;
    private String Location;
    private String Date;
    
}
