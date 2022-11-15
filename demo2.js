jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -10 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("a4"),
            e2 = prepare("s3"),
            e3 = prepare("a3"),
            e4 = prepare("b3"),
            e5 = prepare("vcc"),
            e6 = prepare("s2"),
            e7 = prepare("b2"),
            e8 = prepare("a2"),
            e9 = prepare("b4"),
            e10 = prepare("s4"),
            e11 = prepare("c4"),
            e12 = prepare("c0"),
            e13 = prepare("gnd"),
            e14 = prepare("b1"),
            e15 = prepare("a1"),
            e16 = prepare("s1"),
            e17 = prepare("p1"),
            e18 = prepare("p2"),
            e19 = prepare("p3"),
            e20 = prepare("p4"),
            e21 = prepare("p5"),
            e22 = prepare("p6"),
            e23 = prepare("p7"),
            e24 = prepare("p8"),
            e25 = prepare("p9"),
            e26 = prepare("p10"),
            e27 = prepare("p11"),
            e28 = prepare("p12"),
            e29 = prepare("p13"),
            e30 = prepare("p14"),
            e40 = prepare("cin"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        /// Connections For Cin

        var correct_connections_cin_p9 = [
            {
                "source": "p9",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p9"
            }
        ];

        var correct_connections_cin_p12 = [
            {
                "source": "p12",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p12"
            }
        ];

        var correct_connections_cin_p5 = [
            {
                "source": "p5",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p5"
            }
        ];

        var correct_connections_cin_p2 = [
            {
                "source": "p2",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p2"
            }
        ];

        // Valid Connections for B1 B2 B3 B4

        var correct_connections_b1_p10 = [
            {
                "source": "p10",
                "target": "b1"
            },

            {
                "source": "b1",
                "target": "p10"
            }
        ];

        var correct_connections_b2_p13 = [
            {
                "source": "p13",
                "target": "b2"
            },

            {
                "source": "b2",
                "target": "p13"
            }
        ];

        var correct_connections_b3_p4 = [
            {
                "source": "p4",
                "target": "b3"
            },

            {
                "source": "b3",
                "target": "p4"
            }
        ];

        var correct_connections_b4_p1 = [
            {
                "source": "p1",
                "target": "b4"
            },

            {
                "source": "b4",
                "target": "p1"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "p9",
                "target": "cin"
            },
    
            {
               "source": "cin",
                "target": "p9"
            },
            
            {
                "source": "p12",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p12"
            },

            {
                "source": "p5",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p5"
            },

            {
                "source": "p2",
                "target": "cin"
            },

            {
                "source": "cin",
                "target": "p2"
            },

            {
                "source": "p10",
                "target": "b1"
            },
    
            {
               "source": "b1",
                "target": "p10"
            },
            
            {
                "source": "p13",
                "target": "b2"
            },

            {
                "source": "b2",
                "target": "p13"
            },

            {
                "source": "p4",
                "target": "b3"
            },

            {
                "source": "b3",
                "target": "p4"
            },

            {
                "source": "p1",
                "target": "b4"
            },

            {
                "source": "b4",
                "target": "p1"
            },
            
        ];

        var actual_connections = instance.getAllConnections();

        
        var is_connected_cin_p9=false;
        var is_connected_cin_p12=false;
        var is_connected_cin_p5=false;
        var is_connected_cin_p2=false;

        var is_connected_b1_p10=false;
        var is_connected_b2_p13=false;
        var is_connected_b3_p4=false;
        var is_connected_b4_p1=false;
        

        
        var unallowed_connection_present = false;
        var count =0;

        //checking for cin_p9 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_cin_p9){
                is_connected_cin_p9 = correct_connections_cin_p9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for cin_p12 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_cin_p12){
                is_connected_cin_p12 = correct_connections_cin_p12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for cin_p5 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_cin_p5){
                is_connected_cin_p5 = correct_connections_cin_p5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for cin_p2 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_cin_p2){
                is_connected_cin_p2 = correct_connections_cin_p2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        //checking for b1_p10 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b1_p10){
                is_connected_b1_p10 = correct_connections_b1_p10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for b2_p13 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b2_p13){
                is_connected_b2_p13 = correct_connections_b2_p13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for b3_p4 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b3_p4){
                is_connected_b3_p4 = correct_connections_b3_p4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for b4_p1 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_b4_p1){
                is_connected_b4_p1 = correct_connections_b4_p1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        






        if(unallowed_connection_present){
            alert("WRONG CONNECTION");
        }
        
        else if (is_connected_cin_p9 && is_connected_cin_p12 && is_connected_cin_p5 && is_connected_cin_p2 && is_connected_b1_p10 && is_connected_b2_p13 && is_connected_b3_p4 && is_connected_b4_p1){
            alert("RIGHT CONNECTION");
        } 

        else {
            alert("WRONG CONNECTION");
            return;
        }   
    });
});