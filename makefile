
# Local environment
build:
	docker-compose -f docker/local.yml build
start:
	docker-compose -f docker/local.yml up -d
stop:
	docker-compose -f docker/local.yml down
exec:
	docker exec -it new_gu_ask_real_api_local bash
logging:
	docker logs -f new_gu_ask_real_api_local
