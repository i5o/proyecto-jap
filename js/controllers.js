var module = angular.module('app.campeones', []);

ControllerCampeon.inject = ['$scope', '$state', '$stateParams', '$filter']
ControllerCampeones.inject = ['$scope'];

function ControllerCampeon($scope, $state, $stateParams, $filter) {
    $scope.campeon = campeones.filter(function(e) {
        return e.nombre == $stateParams.campeon || e.nombrelistado == $stateParams.campeon;
    })[0];

    if (!$scope.campeon) {
        $state.go('listado');
    }
    $scope.descripcion = $scope.campeon.descripcion;
    $scope.fondoinicial = $filter('fixNombreCampeon')($scope.campeon.nombre) + "_0.jpg";
    $scope.fondo = $scope.fondoinicial;

    $scope.cambiarFondo = function(img) {
        if (!img) {
            img = $scope.fondoinicial;
        }
        $scope.fondo = img;
    }
}

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


};

module.controller('ControllerCampeones', ControllerCampeones);
module.controller('ControllerCampeon', ControllerCampeon);