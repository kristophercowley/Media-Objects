(function () {
    angular.module('my-app', [])

        .controller('MainController', function () {
            var mc = this;
            mc.test = "test";
            mc.alert = function(){
                alert('Working')
            }
            mc.addItem = function(newItem){
                mc.mediaObj.push(newItem);
                mc.newItem = "";
            }
             mc.removeItem = function(i){
                mc.mediaObj.splice(i,1);
                mc.newItem = "";
            }
            mc.mediaObj = [
                {
                    heading: "Media Item 1",
                    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCP3eFIlapqYHlsUlUMbobPPGRPRz_BkKpcK4wW__DxwHkJEfY9A",
                    link: "link.html"
                },
                {
                    heading: "Media Item 2",
                    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTejcOJcRLdRvxoP24GuDjpboc9kHUXRNmMyhDTaApiYG7rL69euw",
                    link: "link.html"
                },
                {
                    heading: "Media Item 3",
                    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGgAeNby1wmvqLe-R4kHJB_nk6jR5Tyw-o32OEzcbf5HOioQ4lkA",
                    link: "link.html"
                },
                {
                    heading: "Media Item 4",
                    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQE-ZfZ_kQT58ZdVYObxgJqgftHWaJpsu4jRjyo2zg5gjhGAlyNMQ",
                    link: "link.html"
                },
                {
                    heading: "Media Item 5",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw55N4RhLSGGo0JyWANnr_MsGpXBwuTysTauRh5lTdQeNJU5JW",
                    link: "link.html"
                },
                {
                    heading: "Media Item 6",
                    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn5GiZ8_wqs6LvjdKEcYa8EQPs3fCBD-99Au4h5w5KFucMar4a",
                    link: "link.html"
                },
                {
                    heading: "Media Item 7",
                    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnMOiet_7ynGIZXMFtL8fGH-nbMEdEPouFICji0F6KYbGEg6UE",
                    link: "link.html"
                }
            ]
        })
} ())