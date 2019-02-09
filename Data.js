let data = {
    sun: {
        name: 'Sun',
        distance: 0,
        radius: 30,
        color: [255, 183, 66],
        period: 0,
        satellites: [
            {
                name: 'Mercury',
                distance: 60,
                radius: 2,
                period: .03,
                color: [202, 87, 95]
            },
            {
                name: 'Venus',
                distance: 83,
                radius: 6,
                period: .025,
                color: [255, 255, 255]
            },
            {
                name: 'Earth',
                distance: 110,
                radius: 6,
                period: -.02,
                color: [32, 164, 243],
                satellites: [
                    {
                        name: 'Moon',
                        distance: 10,
                        radius: 1,
                        period: -0.05,
                        color: [255, 255, 255]
                    }
                ]
            },
            {
                name: 'Mars',
                distance: 140,
                radius: 4,
                period: -.01,
                color: [244, 67, 54],
                satellites: [
                    {
                        name: 'Phobos',
                        distance: 10,
                        radius: 1,
                        period: .05,
                        color: [0, 188, 212]
                    },
                    {
                        name: 'Deimos',
                        distance: 10,
                        radius: 1,
                        period: -.05,
                        color: [121, 85, 72]
                    }
                ]
            },
            {
                name: 'Jupiter',
                distance: 260,
                radius: 10,
                period: -.007,
                color: [121, 85, 72],
                satellites: [
                    {
                        name: 'Io',
                        distance: 12,
                        radius: 1,
                        period: .05,
                        color: [0, 188, 212]
                    },
                    {
                        name: 'Europa',
                        distance: 15,
                        radius: 2,
                        period: -.03,
                        color: [121, 85, 72]
                    },
                    {
                        name: 'Ganymede',
                        distance: 16,
                        radius: 2,
                        period: -.02,
                        color: [255, 255, 255]
                    },
                    {
                        name: 'Callisto',
                        distance: 17,
                        radius: 3,
                        period: .04,
                        color: [33, 150, 243]
                    },
                ]
            },
            {
                name: 'Saturn',
                distance: 310,
                radius: 8,
                period: .005,
                color: [255, 235, 59],
                satellites: [
                    {
                        name: 'Mimas',
                        distance: 16,
                        radius: 2,
                        period: -.02,
                        color: [255, 255, 255]
                    },
                    {
                        name: 'Emceladus',
                        distance: 16,
                        radius: 2,
                        period: .02,
                        color: [255, 255, 255]
                    },
                ]
            },
            {
                name: 'Uranus',
                distance: 340,
                radius: 5,
                period: .003,
                color: [176, 216, 215]
            },
            {
                name: 'Neptune',
                distance: 380,
                radius: 6,
                period: -.001,
                color: [66, 116, 167]
            }
        ]
    }
}
