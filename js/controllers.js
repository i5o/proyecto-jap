var module = angular.module('app.campeones', []);

ControllerCampeones.inject = ['$scope'];


function ControllerCampeones($scope) {
    $scope.campeones = campeones;
    $scope.busqueda = "";


    $scope.campeones.forEach(function(element) {
        element.foto = "img/" + element.nombre.replace(" ", "").replace(".", "").replace("'", "") + ".png";
    }, this);

    $scope.filtrar = function() {
        var index = 0;
        var actual = 1;
        $scope.filas = [
            []
        ];
        var busqueda = $scope.busqueda.trim();
        $scope.campeones.forEach(function(element) {
            added = false
            if (busqueda) {
                if (element.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                    $scope.filas[index].push(element);
                    added = true
                }
            } else {
                $scope.filas[index].push(element);
                added = true
            }
            if (added) {
                if (actual == 12) {
                    index += 1
                    actual = 1;
                    $scope.filas.push([]);
                } else {
                    actual += 1
                }
            }
        }, this);
    }
    $scope.filtrar();


    $scope.limpiarBusqueda = function() {
        $scope.busqueda = "";
        $scope.filtrar();
    }

    $scope.abrirCampeon = function(campeon) {
        alert("Informacion del campeon " + campeon + " no disponible. (No implementado)");
    }
};

module.controller('ControllerCampeones', ControllerCampeones);