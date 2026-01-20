// Mobile menu toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (navLinks.classList.contains('active') && 
                !nav.contains(event.target) && 
                !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            closeMenu();
        }

        // Scroll to specific section
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        }

        // Add smooth scrolling to nav links
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    closeMenu();
                }
            });
        });

        // Bar chart specification with dark theme colors
        const barChartSpec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "width": 600,
            "height": 300,
            "description": "Total population of Romania (2003–2025)",
            "data": {
                "values": [
                {"Year": 2003, "Population": 21627509},
                {"Year": 2004, "Population": 21521142},
                {"Year": 2005, "Population": 21382354},
                {"Year": 2006, "Population": 21257016},
                {"Year": 2007, "Population": 21130503},
                {"Year": 2008, "Population": 20635460},
                {"Year": 2009, "Population": 20440290},
                {"Year": 2010, "Population": 20294683},
                {"Year": 2011, "Population": 20199059},
                {"Year": 2012, "Population": 20095996},
                {"Year": 2013, "Population": 20020074},
                {"Year": 2014, "Population": 19953089},
                {"Year": 2015, "Population": 19875542},
                {"Year": 2016, "Population": 19760585},
                {"Year": 2017, "Population": 19643949},
                {"Year": 2018, "Population": 19533481},
                {"Year": 2019, "Population": 19425873},
                {"Year": 2020, "Population": 19354339},
                {"Year": 2021, "Population": 19229519},
                {"Year": 2022, "Population": 19043098},
                {"Year": 2023, "Population": 19055228},
                {"Year": 2024, "Population": 19067576},
                {"Year": 2025, "Population": 19036031}
                ]
            },
            "mark": {
                "type": "bar",
                "point": true
            },
            "encoding": {
                "x": {
                "field": "Year",
                "type": "ordinal",
                "title": "Year",
                "axis": {
                    "labelAngle": 90,
                    "labelColor": "#fff",
                    "titleColor": "#00d4ff"
                }
                },
                "y": {
                "field": "Population",
                "type": "quantitative",
                "title": "Population (people)",
                "axis": {
                    "labelColor": "#fff",
                    "titleColor": "#00d4ff",
                    "format": ",.0f"
                }
                },
                "tooltip": [
                {"field": "Year", "type": "ordinal", "title": "Year"},
                {"field": "Population", "type": "quantitative", "title": "Population", "format": ",.0f"}
                ]
            },
            "title": "Total Population of Romania, 2003–2025",
            "config": {
                "background": "transparent",
                "axis": {
                "gridColor": "#333",
                "domainColor": "#666",
                "labelColor": "#fff",
                "titleColor": "#00d4ff"
                },
                "text": {"color": "#fff"},
                "title": {"color": "#00d4ff"},
                "mark": {"color": "#00d4ff"},
                "tooltip": {
                "theme": "dark"
                }
            }
        };


        // Render the bar chart with compact actions menu
        vegaEmbed('#bar-chart-1', barChartSpec, {
            actions: false,
            renderer: 'svg',
            theme: 'dark'
        }).catch(console.error);
        
        // Hungary population spec (imported)
        const hungarySpec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "width": 800,
            "height": 300,
            "description": "Population of Hungary by gender from 1941 to 2025",
            "autosize": { "type": "fit", "contains": "padding" },
            "data": {
                "values": [
                {"Year": 1941, "Men": 4560875, "Women": 4755199},
                {"Year": 1949, "Men": 4423420, "Women": 4781379},
                {"Year": 1960, "Men": 4804043, "Women": 5157001},
                {"Year": 1970, "Men": 5003651, "Women": 5318448},
                {"Year": 1980, "Men": 5188709, "Women": 5520754},
                {"Year": 1990, "Men": 4984904, "Women": 5389919},
                {"Year": 2001, "Men": 4851012, "Women": 5349286},
                {"Year": 2002, "Men": 4836980, "Women": 5337873},
                {"Year": 2003, "Men": 4818456, "Women": 5323906},
                {"Year": 2004, "Men": 4804113, "Women": 5312629},
                {"Year": 2005, "Men": 4793115, "Women": 5304434},
                {"Year": 2006, "Men": 4784579, "Women": 5292002},
                {"Year": 2007, "Men": 4779078, "Women": 5287080},
                {"Year": 2008, "Men": 4769562, "Women": 5275839},
                {"Year": 2009, "Men": 4763050, "Women": 5267925},
                {"Year": 2010, "Men": 4756900, "Women": 5257424},
                {"Year": 2011, "Men": 4743901, "Women": 5241821},
                {"Year": 2012, "Men": 4724666, "Women": 5207259},
                {"Year": 2013, "Men": 4713025, "Women": 5182225},
                {"Year": 2014, "Men": 4697447, "Women": 5152770},
                {"Year": 2015, "Men": 4687436, "Women": 5128422},
                {"Year": 2016, "Men": 4678478, "Women": 5101174},
                {"Year": 2017, "Men": 4663753, "Women": 5076104},
                {"Year": 2018, "Men": 4658683, "Women": 5054972},
                {"Year": 2019, "Men": 4660856, "Women": 5039416},
                {"Year": 2020, "Men": 4663876, "Women": 5025500},
                {"Year": 2021, "Men": 4647359, "Women": 5004102},
                {"Year": 2022, "Men": 4628875, "Women": 4981528},
                {"Year": 2023, "Men": 4625260, "Women": 4974484},
                {"Year": 2024, "Men": 4623378, "Women": 4961249},
                {"Year": 2025, "Men": 4605666, "Women": 4933836}
                ]
            },
            "title": "Total Population of Hungary, 1941–2025",
            "config": {
                "background": "transparent",
                "axis": {
                "gridColor": "#333",
                "domainColor": "#666",
                "labelColor": "#fff",
                "titleColor": "#00d4ff"
                },
                "text": {"color": "#fff"},
                "title": {"color": "#00d4ff"},
                "tooltip": {"theme": "dark"}
            },
            "layer": [
                {
                "mark": {"type": "line", "point": true},
                "encoding": {
                    "x": {"field": "Year", "type": "ordinal", "title": "Year"},
                    "y": {"field": "Men", "type": "quantitative", "title": "Population (people)"},
                    "color": {"value": "steelblue"},
                    "tooltip": [
                    {"field": "Year", "title": "Year"},
                    {"field": "Men", "title": "Men"}
                    ]
                }
                },
                {
                "mark": {"type": "line", "point": true},
                "encoding": {
                    "x": {"field": "Year", "type": "ordinal", "title": "Year"},
                    "y": {"field": "Women", "type": "quantitative", "title": "Population (people)"},
                    "color": {"value": "darkorange"},
                    "tooltip": [
                    {"field": "Year", "title": "Year"},
                    {"field": "Women", "title": "Women"}
                    ]
                }
                }
            ]
        };

        
        // Render the Hungary population chart (responsive, same dark config)
        vegaEmbed('#hungary-chart', hungarySpec, {
            actions: false,
            renderer: 'svg',
            theme: 'dark'
        }).catch(console.error);
        
        
        // Price-to-Income Ratio data (2000–2024, EU countries)
        async function renderPriceIncomeChart() {
            try {
                const url = 'https://raw.githubusercontent.com/Lorand-ubb/Lorand-ubb.github.io/refs/heads/main/priceIncomeData.json';
                const response = await fetch(url, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Failed to load priceIncomeData.json (${response.status})`);
                }

                const values = await response.json();
                const countries = Array.from(
                    new Set((values || []).map(v => v?.Country).filter(Boolean))
                ).sort((a, b) => a.localeCompare(b));
                const countryOptions = ['Total', ...countries];

                const priceIncomeSpec = {
                    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                    "width": 600,
                    "height": 300,
                    "description": "Price-to-Income Ratio Trends (2000–2024)",
                    "data": { "values": values },
                    "params": [
                        {
                            "name": "PriceIncomeCountry",
                            "value": "Total",
                            "bind": {
                                "input": "select",
                                "options": countryOptions,
                                "name": "Country: "
                            }
                        }
                    ],
                    "transform": [
                        { "filter": "PriceIncomeCountry == 'Total' || datum.Country == PriceIncomeCountry" }
                    ],
                    "mark": { "type": "line", "point": true, "tooltip": true },
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "title": "Year",
                            "axis": { "labelAngle": -45, "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "y": {
                            "field": "Ratio",
                            "type": "quantitative",
                            "title": "Price-to-Income Ratio",
                            "axis": { "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "color": {
                            "field": "Country",
                            "type": "nominal",
                            "legend": { "title": "Country", "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "tooltip": [
                            { "field": "Country", "type": "nominal", "title": "Country" },
                            { "field": "Year", "type": "ordinal", "title": "Year" },
                            { "field": "Ratio", "type": "quantitative", "title": "Ratio", "format": ".2f" }
                        ]
                    },
                    "title": "Price-to-Income Ratio by Country (2000–2024)",
                    "config": {
                        "background": "transparent",
                        "axis": { "gridColor": "#333", "domainColor": "#666", "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "legend": { "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "tooltip": { "theme": "dark" },
                        "view": { "stroke": "transparent" }
                    }
                };

                await vegaEmbed('#price-income-chart', priceIncomeSpec, { actions: false, renderer: 'svg', theme: 'dark' });
            } catch (err) {
                console.error(err);
                const el = document.querySelector('#price-income-chart');
                if (el) {
                    el.innerHTML = '<p style="color:#ffb3b3">Failed to load Price-to-Income chart data.</p>';
                }
            }
        }

        renderPriceIncomeChart();



        // Mamahotel (young adults living with parents) chart
        async function renderMamahotelChart() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Lorand-ubb/Lorand-ubb.github.io/refs/heads/main/mamahotel-stats.json', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Failed to load mamahotel-stats.json (${response.status})`);
                }

                const raw = await response.json();
                const values = [];

                for (const row of raw) {
                    const country = row.geo;
                    const data = row.data || {};

                    for (const [yearStr, entry] of Object.entries(data)) {
                        const year = Number(yearStr);
                        const value = entry?.value;
                        const flag = entry?.flag ?? null;

                        if (Number.isFinite(year) && value !== null && value !== undefined) {
                            values.push({
                                Country: country,
                                Year: year,
                                Value: value,
                                Flag: flag
                            });
                        }
                    }
                }

                values.sort((a, b) => (a.Country === b.Country ? a.Year - b.Year : a.Country.localeCompare(b.Country)));

                const mamahotelCountries = Array.from(new Set(values.map(v => v.Country)))
                    .sort((a, b) => a.localeCompare(b));
                const mamahotelCountryOptions = ["Total", ...mamahotelCountries];

                const mamahotelSpec = {
                    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                    "description": "Young adults (25–34) living with parents (percent)",
                    "width": 600,
                    "height": 300,
                    "params": [
                        {
                            "name": "MamahotelCountry",
                            "value": "Total",
                            "bind": {
                                "input": "select",
                                "options": mamahotelCountryOptions,
                                "name": "Country: "
                            }
                        }
                    ],
                    "transform": [
                        { "filter": "MamahotelCountry == 'Total' || datum.Country == MamahotelCountry" }
                    ],
                    "data": { "values": values },
                    "mark": { "type": "line", "point": true, "tooltip": true },
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "title": "Year",
                            "axis": { "labelAngle": -45, "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "y": {
                            "field": "Value",
                            "type": "quantitative",
                            "title": "Share (%)",
                            "axis": { "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "color": {
                            "field": "Country",
                            "type": "nominal",
                            "legend": { "title": "Country", "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "tooltip": [
                            { "field": "Country", "type": "nominal", "title": "Country" },
                            { "field": "Year", "type": "ordinal", "title": "Year" },
                            { "field": "Value", "type": "quantitative", "title": "Share (%)", "format": ".1f" },
                            { "field": "Flag", "type": "nominal", "title": "Flag" }
                        ]
                    },
                    "title": {
                        "text": "Young adults living with parents (25–34)",
                        "subtitle": "EU + selected countries",
                        "color": "#00d4ff",
                        "subtitleColor": "#fff"
                    },
                    "config": {
                        "background": "transparent",
                        "axis": { "gridColor": "#333", "domainColor": "#666", "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "legend": { "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "tooltip": { "theme": "dark" },
                        "view": { "stroke": "transparent" }
                    }
                };

                await vegaEmbed('#mamahotel-chart', mamahotelSpec, { actions: false, renderer: 'svg', theme: 'dark' });
            } catch (err) {
                console.error(err);
                const el = document.querySelector('#mamahotel-chart');
                if (el) {
                    el.innerHTML = '<p style="color:#ffb3b3">Failed to load mamahotel chart data.</p>';
                }
            }
        }

        renderMamahotelChart();



        // Housing Cost Overburden Rate spec
        async function renderHousingOverburdenChart() {
            try {
                const url = 'https://raw.githubusercontent.com/Lorand-ubb/Lorand-ubb.github.io/refs/heads/main/housing-overburden-data.json';
                const response = await fetch(url, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Failed to load housing-overburden-data.json (${response.status})`);
                }

                const values = await response.json();
                const countries = Array.from(
                    new Set((values || []).map(v => v?.Country).filter(Boolean))
                ).sort((a, b) => a.localeCompare(b));
                const countryOptions = ['Total', ...countries];

                const housingOverburdenSpec = {
                    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                    "width": 600,
                    "height": 300,
                    "description": "Housing Cost Overburden Rate by Country and Type",
                    "data": { "values": values },
                    "params": [
                        {
                            "name": "OverburdenType",
                            "value": "Total",
                            "bind": {
                                "input": "select",
                                "options": ["Total", "Owner (Mortgage)", "Tenant (Market Price)"],
                                "name": "Housing Tenure Type: "
                            }
                        },
                        {
                            "name": "OverburdenCountry",
                            "value": "Total",
                            "bind": {
                                "input": "select",
                                "options": countryOptions,
                                "name": "Country: "
                            }
                        }
                    ],
                    "transform": [
                        { "filter": "datum.Type == OverburdenType" },
                        { "filter": "OverburdenCountry == 'Total' || datum.Country == OverburdenCountry" }
                    ],
                    "mark": { "type": "line", "point": true, "tooltip": true },
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "title": "Year",
                            "axis": { "labelAngle": 0, "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "y": {
                            "field": "Rate",
                            "type": "quantitative",
                            "title": "Overburden Rate (%)",
                            "axis": { "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "color": {
                            "field": "Country",
                            "type": "nominal",
                            "legend": { "title": "Country", "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "tooltip": [
                            { "field": "Country", "type": "nominal", "title": "Country" },
                            { "field": "Year", "type": "ordinal", "title": "Year" },
                            { "field": "Rate", "type": "quantitative", "title": "Rate (%)", "format": ".1f" },
                            { "field": "Type", "type": "nominal", "title": "Type" }
                        ]
                    },
                    "title": {
                        "text": "Housing Cost Overburden Rate in Europe",
                        "subtitle": "Percentage of population spending >40% of income on housing",
                        "color": "#00d4ff",
                        "subtitleColor": "#fff"
                    },
                    "config": {
                        "background": "transparent",
                        "axis": { "gridColor": "#333", "domainColor": "#666" },
                        "legend": { "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "tooltip": { "theme": "dark" },
                        "view": { "stroke": "transparent" }
                    }
                };

                await vegaEmbed("#housing-overburden-chart", housingOverburdenSpec, { actions: false, renderer: "svg", theme: "dark" });
            } catch (err) {
                console.error(err);
                const el = document.querySelector('#housing-overburden-chart');
                if (el) {
                    el.innerHTML = '<p style="color:#ffb3b3">Failed to load Housing Overburden chart data.</p>';
                }
            }
        }

        renderHousingOverburdenChart();



        // Inflation rate (monthly) chart
        async function renderInflationRateChart() {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Lorand-ubb/Lorand-ubb.github.io/refs/heads/main/inflation-rate.json', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Failed to load inflation-rate.json (${response.status})`);
                }

                const values = await response.json();
                const countries = Array.from(
                    new Set((values || []).map(v => v?.Country).filter(Boolean))
                ).sort((a, b) => a.localeCompare(b));

                const countryOptions = ['Total', ...countries];
                const defaultCountry = countries.includes('EU Average') ? 'EU Average' : (countries[0] ?? 'Total');

                const inflationSpec = {
                    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                    "width": 600,
                    "height": 300,
                    "description": "Monthly inflation rate (HICP) by country",
                    "data": { "values": values },
                    "params": [
                        {
                            "name": "InflationCountry",
                            "value": defaultCountry,
                            "bind": {
                                "input": "select",
                                "options": countryOptions,
                                "name": "Country: "
                            }
                        }
                    ],
                    "transform": [
                        { "calculate": "toDate(datum.YearMonth + '-01')", "as": "Date" },
                        { "filter": "InflationCountry == 'Total' || datum.Country == InflationCountry" }
                    ],
                    "mark": { "type": "line", "point": true, "tooltip": true },
                    "encoding": {
                        "x": {
                            "field": "Date",
                            "type": "temporal",
                            "title": "Month",
                            "axis": {
                                "format": "%Y-%m",
                                "labelAngle": -45,
                                "labelColor": "#fff",
                                "titleColor": "#00d4ff"
                            }
                        },
                        "y": {
                            "field": "InflationRate",
                            "type": "quantitative",
                            "title": "Inflation rate (%)",
                            "axis": { "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "color": {
                            "field": "Country",
                            "type": "nominal",
                            "legend": { "title": "Country", "labelColor": "#fff", "titleColor": "#00d4ff" }
                        },
                        "tooltip": [
                            { "field": "Country", "type": "nominal", "title": "Country" },
                            { "field": "YearMonth", "type": "nominal", "title": "Month" },
                            { "field": "InflationRate", "type": "quantitative", "title": "Inflation (%)", "format": ".1f" }
                        ]
                    },
                    "title": {
                        "text": "Inflation rate by country (monthly)",
                        "subtitle": "HICP inflation rate (%)",
                        "color": "#00d4ff",
                        "subtitleColor": "#fff"
                    },
                    "config": {
                        "background": "transparent",
                        "axis": { "gridColor": "#333", "domainColor": "#666", "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "legend": { "labelColor": "#fff", "titleColor": "#00d4ff" },
                        "tooltip": { "theme": "dark" },
                        "view": { "stroke": "transparent" }
                    }
                };

                await vegaEmbed('#inflation-rate-chart', inflationSpec, { actions: false, renderer: 'svg', theme: 'dark' });
            } catch (err) {
                console.error(err);
                const el = document.querySelector('#inflation-rate-chart');
                if (el) {
                    el.innerHTML = '<p style="color:#ffb3b3">Failed to load Inflation Rate chart data.</p>';
                }
            }
        }

        renderInflationRateChart();



