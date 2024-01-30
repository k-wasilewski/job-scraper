Submodules:
- `job-scraper-spring-server`
- `job-scraper-node-server`
- `job-scraper-next-client`


- # Deploy to Raspberry Pi

1. Edit hosts in submodules' `Dockerfile.rpi`s to match your RasPi IP.

2. Build images on RasPi:
```
$ cd [submodule]
$ docker build -f Dockerfile.rpi -t [submodule] --platform linux/amd/v7 .
```

3. Edit hosts in `docker-compose.rpi.yml` to match your RasPi IP.

4. Run composer on RasPi:
```
$ docker-compose -f docker-compose.rpi.yml up
```


# Deploy to Win/Unix

2. Build images:
```
$ cd [submodule]
$ docker build -t [submodule] .
```

4. Run composer:
```
$ docker-compose up
```


## User flow:
#### 1 - Add / edit config
![alt_text](https://raw.githubusercontent.com/k-wasilewski/job-scraper/main/_readme_screenshots/1add_edit_config.png)

#### 2 - Config details
![alt_text](https://raw.githubusercontent.com/k-wasilewski/job-scraper/main/_readme_screenshots/2config_details.png)

#### 3 - Job offers list
![alt_text](https://raw.githubusercontent.com/k-wasilewski/job-scraper/main/_readme_screenshots/3jobs_theme.png)

#### 4 - Job offers gallery
![alt_text](https://raw.githubusercontent.com/k-wasilewski/job-scraper/main/_readme_screenshots/4job_gallery.png)

