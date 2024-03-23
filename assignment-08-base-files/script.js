// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Guangdong',
                capital: 'Guangzhou',
                largestCity: 'Guangzhou',
                area: 179800,
            },
            {
                name: 'Sichuan',
                capital: 'Chengdu',
                largestCity: 'Chengdu',
                area: 485000,
            },
            {
                name: 'Henan',
                capital: 'Zhengzhou',
                largestCity: 'Zhengzhou',
                area: 167000,
            },
        ],
    },
    {
        country: 'United Kingdom',
        capital: 'London',
        largestCity: 'London',
        subdivisionName: 'country',
        subdivisions: [
            {
                name: 'England',
                capital: 'London',
                largestCity: 'London',
                area: 130395,
            },
            {
                name: 'Scotland',
                capital: 'Edinburgh',
                largestCity: 'Glasgow',
                area: 78772,
            },
            {
                name: 'Wales',
                capital: 'Cardiff',
                largestCity: 'Cardiff',
                area: 20779,
            },
        ],
    }
]

function fillTableWithUniqueCountryInfo() {
    const tableBody = document.getElementById('countryInfo').getElementsByTagName('tbody')[0];

    GEOGRAPHY_LIST.forEach(country => {
        country.subdivisions.forEach((subdivision, index) => {
            const row = document.createElement('tr');
            if (index === 0) {
                row.innerHTML += `
                    <td rowspan="${country.subdivisions.length}">${country.country}</td>
                    <td rowspan="${country.subdivisions.length}">${country.capital}</td>
                    <td rowspan="${country.subdivisions.length}">${country.largestCity}</td>
                `;
            }
            row.innerHTML += `
                <td>${subdivision.name}</td>
                <td>${subdivision.capital}</td>
                <td>${subdivision.largestCity}</td>
                <td>${subdivision.area}</td>
            `;

            tableBody.appendChild(row);
        });
    });
}

document.addEventListener('DOMContentLoaded', fillTableWithUniqueCountryInfo);