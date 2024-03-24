// package com.example.yoga.config;

// import java.util.List;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import io.swagger.v3.oas.models.Components;
// import io.swagger.v3.oas.models.OpenAPI;
// import io.swagger.v3.oas.models.info.Contact;
// import io.swagger.v3.oas.models.info.Info;
// import io.swagger.v3.oas.models.info.License;
// import io.swagger.v3.oas.models.security.SecurityRequirement;
// import io.swagger.v3.oas.models.security.SecurityScheme;
// import io.swagger.v3.oas.models.security.SecurityScheme.Type;
// import io.swagger.v3.oas.models.servers.Server;

// @Configuration
// public class SwaggerConfig {
//     @Bean
//     public OpenAPI openAPI() {
//             return new OpenAPI()
//                             .info(new Info()
//                                             .title("Yoga Academy")
//                                             .description("This is a sample API documentation")
//                                             .version("1.0.0")
//                                             .contact(new Contact()
//                                                             .name("Yoga academy")
//                                                             .email("yoga.academy.dev@gmail.com")
//                                                             .url("https://example.com"))
//                                             .license(new License()
//                                                             .name("Apache 2.0")
//                                                             .url("https://www.apache.org/licenses/LICENSE-2.0.html")))
//                             .servers(List.of(new Server().url("http://localhost:7777")))
//                             .addSecurityItem(new SecurityRequirement()
//                                             .addList("bearerAuth"))
//                             .components(new Components()
//                                             .addSecuritySchemes(
//                                                             "bearerAuth", new SecurityScheme()
//                                                                             .name("bearerAuth")
//                                                                             .type(Type.HTTP)
//                                                                             .scheme("bearer")
//                                                                             .description("Provide the JWT token.\"")
//                                                                             .bearerFormat("JWT")));
//     }
// }
