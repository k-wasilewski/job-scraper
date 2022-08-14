# Deploy to Raspberry Pi

1. Build images on RasPi:
- `job-scraper-spring-server`
- `job-scraper-node-server`
- `job-scraper-next-client`
```
$ cd [submodule]
$ docker build -f Dockerfile.rpi -t [submodule] --platform linux/amd/v7
```

2. Edit hosts in `docker-compose.rpi.yml` to match your RasPi IP.

3. Run composer on RasPi:
```
$ docker-compose -f docker-compose.rpi.yml up
```

