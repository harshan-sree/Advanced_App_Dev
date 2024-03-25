package com.example.yoga.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.yoga.constant.Api;


import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
	private final AuthenticationProvider authenticationProvider;
        private static final String[] PublicEndPoints = {
                "/feedback/**",
                "/api/v1/entry/**",
                "/api/v1/userDetails/**",
                "/swagger-ui/**",
                "/swagger-ui.html/**",
                "/api/admin/default",
                "/v3/api-docs/**"
};

	@Bean 
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
		
		        .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
		                corsConfigurationSource()))
                .csrf(csrf -> csrf
                        .disable())
                .authorizeHttpRequests(authorize -> authorize
                .requestMatchers(PublicEndPoints)
                .permitAll()
                .anyRequest()
                .authenticated())
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return httpSecurity.build();
	}
	@Bean
    public CorsConfigurationSource corsConfigurationSource() {
            
		CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(Api.HEADERS);
        configuration.setAllowCredentials(true);
        configuration.setAllowedMethods(Api.METHODS);
        configuration.setAllowedOrigins(Api.ORIGINS);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        
        return source;

        
    }
}

