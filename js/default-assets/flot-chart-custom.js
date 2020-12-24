function DrawCharts7() {
    ! function (e) {
        "use strict";
        e("#pie-chart").length && e.plot("#pie-chart", [{
            data: 17e3,
            color: "#727cf5",
            label: "Linda"
        }, {
            data: 2e4,
            color: "#4ac6ec",
            label: "Ajoy"
        }, {
            data: 13e3,
            color: "#727cf5",
            label: "Margaret"
        }, {
            data: 15e3,
            color: "#63CF72",
            label: "Richard"
        }], {
            series: {
                pie: {
                    show: !0,
                    radius: 1,
                    label: {
                        show: !0,
                        radius: .75,
                        formatter: function (e, a) {
                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(a.percent) + "%</div>"
                        },
                        background: {
                            opacity: .5
                        }
                    }
                }
            },
            legend: {
                show: !1
            }
        });
        var a = [
            [0, 50],
            [1, 40],
            [2, 45],
            [3, 60],
            [4, 50]
        ],
            l = [
                [0, 40],
                [1, 50],
                [2, 35],
                [3, 25],
                [4, 40]
            ],
            t = [{
                data: o = [
                    [0, 30],
                    [1, 35],
                    [2, 35],
                    [3, 30],
                    [4, 30]
                ],
                color: "#727cf5"
            }, {
                data: a,
                color: "#63CF72"
            }, {
                data: l,
                color: "#4ac6ec"
            }],
            i = {
                series: {
                    shadowSize: 0,
                    lines: {
                        show: !0
                    }
                },
                grid: {
                    borderWidth: 1,
                    labelMargin: 10,
                    mouseActiveRadius: 6,
                    borderColor: "#eee",
                    show: !0,
                    hoverable: !0,
                    clickable: !0
                },
                xaxis: {
                    tickColor: "#eee",
                    tickDecimals: 0,
                    font: {
                        lineHeight: 15,
                        style: "normal",
                        color: "#000"
                    },
                    shadowSize: 0,
                    ticks: [
                        [0, "Jan"],
                        [1, "Feb"],
                        [2, "Mar"],
                        [3, "Apr"],
                        [4, "May"],
                        [5, "Jun"],
                        [6, "Jul"],
                        [7, "Aug"],
                        [8, "Sep"],
                        [9, "Oct"],
                        [10, "Nov"],
                        [11, "Dec"]
                    ]
                },
                yaxis: {
                    tickColor: "#eee",
                    tickDecimals: 0,
                    font: {
                        lineHeight: 15,
                        style: "normal",
                        color: "#000"
                    },
                    shadowSize: 0
                },
                legend: {
                    container: ".flc-line",
                    backgroundOpacity: .5,
                    noColumns: 0,
                    backgroundColor: "white",
                    lineWidth: 0
                },
                colors: ["#4ac6ec", "#63CF72", "#68B3C8"]
            };
        e("#line-chart").length && e.plot(e("#line-chart"), [{
            data: o,
            lines: {
                show: !0
            },
            label: "Product A",
            stack: !0,
            color: "#4ac6ec"
        }, {
            data: a,
            lines: {
                show: !0
            },
            label: "Product B",
            stack: !0,
            color: "#727cf5"
        }, {
            data: l,
            lines: {
                show: !0
            },
            label: "Product C",
            stack: !0,
            color: "#68B3C8"
        }], i), e(".flot-chart-line").length && (e(".flot-chart-line").on("bind", "plothover", function (a, l, t) {
            if (t) {
                t.datapoint[0].toFixed(2);
                var i = t.datapoint[1].toFixed(2);
                e(".flot-tooltip").html(t.series.label + " Sales  : " + i).css({
                    top: t.pageY + 5,
                    left: t.pageX + 5
                }).show()
            } else e(".flot-tooltip").hide()
        }), e("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body"));
        var o = [
            [0, 0],
            [1, 35],
            [2, 35],
            [3, 30],
            [4, 30],
            [5, 5],
            [6, 32],
            [7, 37],
            [8, 30],
            [9, 35],
            [10, 30],
            [11, 5]
        ],
            r = (i = {
                series: {
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    },
                    lines: {
                        show: !1,
                        fill: .98,
                        lineWidth: 0
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 10,
                    hoverable: !0,
                    clickable: !0,
                    mouseActiveRadius: 6
                },
                xaxis: {
                    tickDecimals: 0,
                    tickLength: 0
                },
                yaxis: {
                    tickDecimals: 0,
                    tickLength: 0
                },
                legend: {
                    show: !1
                }
            }, {
                series: {
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    },
                    lines: {
                        show: !1,
                        lineWidth: 0
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 10,
                    hoverable: !0,
                    clickable: !0,
                    mouseActiveRadius: 6
                },
                xaxis: {
                    tickDecimals: 0,
                    ticks: !1
                },
                yaxis: {
                    tickDecimals: 0,
                    ticks: !1
                },
                legend: {
                    noColumns: 4,
                    container: e("#chartLegend")
                }
            });
        e("#area-chart").length && e.plot(e("#area-chart"), [{
            data: o,
            lines: {
                show: !0,
                fill: .5
            },
            label: "Product 1",
            stack: !0,
            color: "#727cf5"
        }], i), e(function () {
            e("#column-chart").length && e.plot("#column-chart", [
                [
                    ["January", 10],
                    ["February", 8],
                    ["March", 4],
                    ["April", 13],
                    ["May", 17],
                    ["June", 9]
                ]
            ], {
                series: {
                    color: "#727cf5",
                    bars: {
                        show: !0,
                        barWidth: .5,
                        align: "center"
                    }
                },
                xaxis: {
                    mode: "categories",
                    tickLength: 0
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 10,
                    hoverable: !0,
                    clickable: !0,
                    mouseActiveRadius: 6
                }
            })
        }), e(function () {
            for (var a = [], l = 0; l <= 10; l += 1) a.push([l, parseInt(30 * Math.random())]);
            var i = [];
            for (l = 0; l <= 10; l += 1) i.push([l, parseInt(30 * Math.random())]);
            var o = [];
            for (l = 0; l <= 10; l += 1) o.push([l, parseInt(30 * Math.random())]);
            e("#stacked-bar-chart").length && e.plot("#stacked-bar-chart", t, {
                series: {
                    stack: 0,
                    lines: {
                        show: !1,
                        fill: !0,
                        steps: !1
                    },
                    bars: {
                        show: !0,
                        fill: !0,
                        barWidth: .6
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 10,
                    hoverable: !0,
                    clickable: !0,
                    mouseActiveRadius: 6
                }
            })
        }), e(function () {
            var a = [],
                l = 300;

            function t() {
                for (a.length > 0 && (a = a.slice(1)); a.length < l;) {
                    var e = (a.length > 0 ? a[a.length - 1] : 50) + 10 * Math.random() - 5;
                    e < 0 ? e = 0 : e > 100 && (e = 100), a.push(e)
                }
                for (var t = [], i = 0; i < a.length; ++i) t.push([i, a[i]]);
                return t
            }
            var i = 30;
            if (e("#realtime-chart").length) {
                var o = e.plot("#realtime-chart", [t()], {
                    series: {
                        shadowSize: 0
                    },
                    yaxis: {
                        min: 0,
                        max: 100
                    },
                    xaxis: {
                        show: !1
                    },
                    grid: {
                        borderWidth: 0,
                        labelMargin: 10,
                        hoverable: !0,
                        clickable: !0,
                        mouseActiveRadius: 6
                    }
                });
                ! function e() {
                    o.setData([t()]), o.draw(), setTimeout(e, i)
                }()
            }
        }), e(function () {
            e("#curved-line-chart").length && e.plot(e("#curved-line-chart"), [{
                data: [
                    [0, 6],
                    [1, 14],
                    [2, 10],
                    [3, 14],
                    [4, 5]
                ],
                lines: {
                    show: !0,
                    fill: .98
                },
                label: "Plans",
                stack: !0,
                color: "#5E50F9"
            }, {
                data: [
                    [0, 6],
                    [1, 7],
                    [2, 11],
                    [3, 8],
                    [4, 11]
                ],
                lines: {
                    show: !0,
                    fill: .98
                },
                label: "Purchase",
                stack: !0,
                color: "#8C95FC"
            }, {
                data: [
                    [0, 6],
                    [1, 5],
                    [2, 6],
                    [3, 10],
                    [4, 5]
                ],
                lines: {
                    show: !0,
                    fill: .98
                },
                label: "Services",
                stack: !0,
                color: "#727cf5"
            }], r)
        })
    }(jQuery);
}