FROM maven:3.8.1-openjdk-17-slim AS build
WORKDIR /app
COPY . /app
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/server-0.0.1-SNAPSHOT.jar /app
EXPOSE 8989
CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]