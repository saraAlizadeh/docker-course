# Sample CLI Commands

Here are some Docker Compose CLI commands you'll use for managing this setup:

1. Start the application (runs both services in the background):

   ```bash
   docker compose up -d
   ```

2. View logs (combine logs from both containers):

   ```bash
   docker compose logs
   ```

3. Stop the application (stops all services):

   ```bash
   docker compose down
   ```

4. View container status (shows running containers from your Compose setup):

   ```bash
   docker compose ps
   ```

5. Execute commands inside a running container (e.g., access MySQL container):

   ```bash
   docker compose exec db bash
   ```

6. View logs for a specific service (e.g., view logs from the web service):

   ```bash
   docker compose logs web
   ```

7. Scaling services (e.g., run 3 instances of the web container):

   ```bash
   docker compose up -d --scale web=3
   ```

8. Stop and remove all services and volumes:

   ```bash
   docker compose down -v
   ```
