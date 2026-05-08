# Maio OrbStack Deploy — Makefile
# Usage: make deploy | make on | make off | make status

IMAGE_NAME ?= papa-pasta-fnd
NAMESPACE ?= fnd
DEPLOYMENT_NAME ?= papa-pasta-fnd
K8S_DIR := ./k8s

.PHONY: build deploy on off status clean

build:
	docker build -t $(IMAGE_NAME):latest .

deploy: build
	kubectl apply -f $(K8S_DIR)/
	kubectl rollout status deployment/$(DEPLOYMENT_NAME) -n $(NAMESPACE)

on:
	kubectl scale deployment $(DEPLOYMENT_NAME) --replicas=1 -n $(NAMESPACE)

off:
	kubectl scale deployment $(DEPLOYMENT_NAME) --replicas=0 -n $(NAMESPACE)

status:
	kubectl get pods -n $(NAMESPACE)
	kubectl get svc -n $(NAMESPACE)
	kubectl get ingress -n $(NAMESPACE)

clean:
	kubectl delete namespace $(NAMESPACE) --ignore-not-found=true
