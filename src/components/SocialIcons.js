import React from "react";

export default props => {
  const iconSVG = iconName => {
    switch (iconName) {
      case "linkedin":
        return (
          <g id="linkedin">
            <path
              fill="#006699"
              d="M245.986,8.933H27.548c-10.461,0-18.942,8.276-18.942,18.478v220.993c0,10.206,8.48,18.478,18.942,18.478
		h218.439c10.461,0,18.942-8.272,18.942-18.478V27.411C264.928,17.209,256.447,8.933,245.986,8.933z M86.305,224.863H47.59V108.385
		h38.715V224.863z M66.947,92.482L66.947,92.482h-0.252c-12.992,0-21.394-8.944-21.394-20.122c0-11.429,8.659-20.125,21.902-20.125
		c13.245,0,21.396,8.696,21.648,20.125C88.851,83.537,80.448,92.482,66.947,92.482z M225.905,224.863h-38.712V162.55
		c0-15.658-5.604-26.34-19.613-26.34c-10.695,0-17.065,7.204-19.864,14.159c-1.022,2.488-1.274,5.966-1.274,9.447v65.046h-38.714
		h-0.001h0.001c0,0,0.508-105.549,0-116.478h38.715v16.493c5.145-7.937,14.349-19.227,34.89-19.227
		c25.471,0,44.571,16.648,44.571,52.424V224.863z"
            />
            <path
              fill="#FFFFFF"
              d="M47.59,108.385h38.715v116.478H47.59V108.385z M67.203,52.234c-13.243,0-21.902,8.696-21.902,20.125
		c0,11.178,8.401,20.122,21.394,20.122h0.252h0.001c13.501,0,21.904-8.944,21.904-20.122C88.6,60.93,80.448,52.234,67.203,52.234z
		 M181.334,105.651c-20.541,0-29.746,11.289-34.89,19.227v0.399h-0.259c0.084-0.131,0.172-0.266,0.259-0.399v-16.493h-38.715
		c0.508,10.93,0,116.478,0,116.478h38.714v-65.046c0-3.481,0.252-6.959,1.274-9.447c2.799-6.956,9.169-14.159,19.864-14.159
		c14.009,0,19.613,10.681,19.613,26.34v62.313h38.712v-66.787C225.905,122.299,206.805,105.651,181.334,105.651z M146.443,125.277
		v-0.399c-0.086,0.133-0.174,0.268-0.259,0.399H146.443z"
            />
          </g>
        );
      case "github":
        return (
          <path
            id="github"
            fill="#CCCCCC"
            d="M136.5,4.256C62.511,4.256,2.583,64.184,2.583,138.173c0,59.258,38.334,109.309,91.565,127.053
        c6.696,1.172,9.207-2.846,9.207-6.361c0-3.181-0.167-13.726-0.167-24.942c-33.647,6.194-42.351-8.202-45.029-15.735
        c-1.507-3.85-8.035-15.735-13.726-18.916c-4.687-2.511-11.383-8.705-0.167-8.872c10.546-0.167,18.079,9.709,20.59,13.726
        c12.052,20.255,31.303,14.563,39.003,11.048c1.172-8.705,4.687-14.563,8.537-17.911c-29.796-3.348-60.932-14.898-60.932-66.121
        c0-14.563,5.189-26.616,13.726-35.99c-1.339-3.348-6.026-17.074,1.339-35.488c0,0,11.216-3.515,36.827,13.726
        c10.713-3.013,22.096-4.52,33.479-4.52s22.766,1.507,33.479,4.52c25.612-17.409,36.827-13.726,36.827-13.726
        c7.365,18.414,2.678,32.14,1.339,35.488c8.537,9.374,13.726,21.259,13.726,35.99c0,51.39-31.303,62.773-61.099,66.121
        c4.854,4.185,9.039,12.22,9.039,24.775c0,17.911-0.167,32.307-0.167,36.827c0,3.515,2.511,7.7,9.207,6.361
        c52.897-17.744,91.231-67.963,91.231-127.053C270.417,64.184,210.489,4.256,136.5,4.256z"
          />
        );
      case "facebook":
        return (
          <g id="facebook">
            <path
              fill="#3C5A99"
              d="M258.828,0.893H15.959c-8.323,0-15.068,6.745-15.068,15.068v242.87
            c0,8.321,6.744,15.069,15.068,15.069h242.869v-0.001c8.32,0,15.067-6.747,15.067-15.069V15.961
            C273.895,7.638,267.149,0.893,258.828,0.893z M189.26,273.899h-42.548V168.176h-35.577v-41.202h35.577V96.589
            c0-35.262,21.536-54.463,52.992-54.463c15.067,0,28.019,1.122,31.792,1.624v36.851l-21.818,0.01
            c-17.106,0-20.418,8.129-20.418,20.058v26.305h40.8l-5.314,41.202H189.26"
            />
            <path
              fill="#FFFFFF"
              d="M146.712,96.589v30.385h-35.577v41.202h35.577v105.723h42.548V168.176h35.486l5.314-41.202h-40.8v-26.305
            c0-11.929,3.312-20.058,20.418-20.058l21.818-0.01V43.75c-3.773-0.502-16.725-1.624-31.792-1.624
            C168.248,42.126,146.712,61.327,146.712,96.589z"
            />
          </g>
        );
      case "behance":
        return (
          <path
            id="behance"
            fill="#004FE7"
            d="M82.547,56.821c7.575,0,14.414,0.652,20.662,2.006c6.213,1.318,11.509,3.517,15.99,6.535
	c4.416,3.017,7.867,7.024,10.344,12.078c2.41,4.978,3.618,11.213,3.618,18.582c0,7.972-1.803,14.63-5.427,19.954
	c-3.642,5.317-9.004,9.676-16.152,13.059c9.736,2.804,16.961,7.734,21.745,14.75c4.808,7.061,7.165,15.512,7.165,25.42
	c0,8.032-1.535,14.943-4.612,20.757c-3.1,5.891-7.326,10.659-12.527,14.341c-5.249,3.714-11.265,6.442-18.013,8.215
	c-6.671,1.768-13.598,2.661-20.703,2.661H7.887V56.821H82.547z M78.041,120.8c6.172,0,11.289-1.467,15.342-4.443
	c4.011-2.927,5.951-7.763,5.951-14.401c0-3.684-0.642-6.728-1.94-9.096c-1.345-2.359-3.13-4.211-5.373-5.504
	c-2.231-1.348-4.755-2.277-7.677-2.779c-2.875-0.563-5.88-0.782-8.968-0.782H42.754v37.007h35.288L78.041,120.8L78.041,120.8z
	 M79.97,188.21c3.434,0,6.701-0.31,9.771-0.994c3.118-0.681,5.88-1.762,8.218-3.359c2.327-1.538,4.267-3.642,5.665-6.317
	c1.411-2.654,2.089-6.103,2.089-10.265c0-8.161-2.303-13.958-6.868-17.478c-4.583-3.472-10.682-5.199-18.186-5.199H42.751v43.612
	H79.97z M190.189,187.683c4.719,4.607,11.539,6.925,20.376,6.925c6.35,0,11.836-1.607,16.443-4.808
	c4.564-3.198,7.343-6.617,8.415-10.164h27.737c-4.457,13.804-11.218,23.655-20.447,29.589c-9.123,5.954-20.239,8.924-33.201,8.924
	c-9.034,0-17.163-1.462-24.458-4.341c-7.296-2.917-13.389-7.002-18.52-12.331c-4.999-5.352-8.879-11.676-11.646-19.109
	c-2.738-7.388-4.112-15.571-4.112-24.438c0-8.576,1.428-16.582,4.232-23.988c2.856-7.427,6.814-13.84,12.016-19.213
	c5.207-5.406,11.378-9.67,18.573-12.789c7.195-3.103,15.127-4.665,23.917-4.665c9.7,0,18.192,1.869,25.477,5.671
	c7.253,3.752,13.206,8.831,17.882,15.195c4.666,6.35,7.998,13.613,10.076,21.763c2.064,8.132,2.785,16.63,2.196,25.524h-82.743
	C182.399,174.493,185.458,183.077,190.189,187.683z M226.376,127.435c-3.744-4.138-10.075-6.382-17.811-6.382
	c-5.034,0-9.193,0.848-12.532,2.573c-3.267,1.702-5.933,3.821-7.981,6.317c-2.036,2.536-3.41,5.217-4.219,8.079
	c-0.803,2.791-1.291,5.324-1.434,7.558h51.237C232.887,137.549,230.138,131.61,226.376,127.435z M175.953,67.443h64.193v15.625
	h-64.193V67.443z"
          />
        );
      case "instagram":
        return (
          <g id="instagram">
            <radialGradient
              id="SVGID_1_"
              cx="-1839.8926"
              cy="988.4709"
              r="135.6727"
              gradientTransform="matrix(0 -1.982 1.8439 0 -1749.7347 -3352.5952)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style={{ stopColor: "#FFDD55" }} />
              <stop offset="0.1" style={{ stopColor: "#FFDD55" }} />
              <stop offset="0.5" style={{ stopColor: "#FF543E" }} />
              <stop offset="1" style={{ stopColor: "#C837AB" }} />
            </radialGradient>
            <path
              fill="url(#SVGID_1_)"
              d="M136.559,1.833c-56.653,0-73.221,0.058-76.442,0.326C48.491,3.125,41.256,4.956,33.375,8.88
		c-6.074,3.016-10.864,6.512-15.592,11.413C9.173,29.231,3.955,40.227,2.066,53.297c-0.918,6.345-1.186,7.639-1.24,40.051
		c-0.021,10.804,0,25.022,0,44.094c0,56.607,0.063,73.159,0.334,76.373c0.939,11.313,2.713,18.431,6.471,26.216
		c7.18,14.903,20.894,26.091,37.049,30.265c5.594,1.44,11.772,2.233,19.704,2.609c3.361,0.146,37.613,0.25,71.886,0.25
		s68.546-0.042,71.823-0.209c9.184-0.432,14.517-1.148,20.414-2.672c16.26-4.195,29.723-15.216,37.049-30.328
		c3.684-7.598,5.552-14.987,6.397-25.709c0.184-2.338,0.261-39.61,0.261-76.832c0-37.229-0.083-74.432-0.267-76.77
		c-0.856-10.896-2.724-18.222-6.527-25.966c-3.12-6.339-6.585-11.073-11.616-15.913c-8.977-8.575-19.956-13.793-33.039-15.68
		c-6.339-0.916-7.602-1.188-40.038-1.244L136.559,1.833L136.559,1.833z"
            />
            <radialGradient
              id="SVGID_2_"
              cx="-979.7017"
              cy="416.1513"
              r="135.6727"
              gradientTransform="matrix(0.1739 0.8687 -3.5818 0.7172 1616.3136 573.9915)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style={{ stopColor: "#3771C8" }} />
              <stop offset="0.128" style={{ stopColor: "#3771C8" }} />
              <stop
                offset="1"
                style={{ stopColor: "#6600FF", stopOpacity: "0" }}
              />
            </radialGradient>
            <path
              fill="url(#SVGID_2_)"
              d="M136.559,1.833c-56.653,0-73.221,0.058-76.442,0.326C48.491,3.125,41.256,4.956,33.375,8.88
		c-6.074,3.016-10.864,6.512-15.592,11.413C9.173,29.231,3.955,40.227,2.066,53.297c-0.918,6.345-1.186,7.639-1.24,40.051
		c-0.021,10.804,0,25.022,0,44.094c0,56.607,0.063,73.159,0.334,76.373c0.939,11.313,2.713,18.431,6.471,26.216
		c7.18,14.903,20.894,26.091,37.049,30.265c5.594,1.44,11.772,2.233,19.704,2.609c3.361,0.146,37.613,0.25,71.886,0.25
		s68.546-0.042,71.823-0.209c9.184-0.432,14.517-1.148,20.414-2.672c16.26-4.195,29.723-15.216,37.049-30.328
		c3.684-7.598,5.552-14.987,6.397-25.709c0.184-2.338,0.261-39.61,0.261-76.832c0-37.229-0.083-74.432-0.267-76.77
		c-0.856-10.896-2.724-18.222-6.527-25.966c-3.12-6.339-6.585-11.073-11.616-15.913c-8.977-8.575-19.956-13.793-33.039-15.68
		c-6.339-0.916-7.602-1.188-40.038-1.244L136.559,1.833L136.559,1.833z"
            />
            <path
              fill="#FFFFFF"
              d="M136.496,37.317c-27.21,0-30.624,0.119-41.311,0.605c-10.666,0.488-17.946,2.177-24.317,4.655
		c-6.59,2.559-12.179,5.982-17.748,11.553c-5.573,5.569-8.996,11.159-11.563,17.746c-2.484,6.372-4.175,13.655-4.655,24.317
		c-0.478,10.687-0.603,14.104-0.603,41.313s0.121,30.614,0.605,41.301c0.491,10.666,2.179,17.946,4.655,24.317
		c2.561,6.59,5.984,12.179,11.555,17.748c5.567,5.573,11.156,9.004,17.742,11.563c6.375,2.478,13.657,4.166,24.321,4.655
		c10.687,0.486,14.1,0.605,41.307,0.605c27.212,0,30.616-0.119,41.303-0.605c10.666-0.488,17.955-2.177,24.329-4.655
		c6.587-2.559,12.169-5.99,17.736-11.563c5.573-5.569,8.996-11.159,11.563-17.746c2.463-6.372,4.154-13.655,4.655-24.317
		c0.48-10.687,0.605-14.093,0.605-41.303s-0.125-30.624-0.605-41.311c-0.501-10.666-2.192-17.946-4.655-24.317
		c-2.567-6.59-5.99-12.179-11.563-17.748c-5.573-5.573-11.146-8.996-17.742-11.553c-6.387-2.478-13.672-4.166-24.338-4.655
		c-10.687-0.486-14.089-0.605-41.307-0.605L136.496,37.317z M127.509,55.372c2.668-0.004,5.644,0,8.988,0
		c26.75,0,29.921,0.096,40.485,0.576c9.768,0.447,15.07,2.079,18.602,3.45c4.675,1.816,8.009,3.987,11.513,7.493
		c3.507,3.507,5.677,6.846,7.497,11.522c1.371,3.527,3.006,8.829,3.45,18.598c0.48,10.562,0.584,13.734,0.584,40.472
		s-0.104,29.911-0.584,40.472c-0.447,9.768-2.079,15.07-3.45,18.598c-1.816,4.675-3.991,8.005-7.497,11.509
		c-3.507,3.507-6.836,5.677-11.513,7.493c-3.527,1.378-8.833,3.006-18.602,3.452c-10.562,0.48-13.734,0.584-40.485,0.584
		c-26.753,0-29.923-0.104-40.485-0.584c-9.768-0.451-15.07-2.083-18.604-3.454c-4.675-1.816-8.015-3.987-11.522-7.493
		c-3.507-3.507-5.677-6.838-7.497-11.515c-1.371-3.527-3.006-8.829-3.45-18.598c-0.48-10.562-0.576-13.734-0.576-40.489
		s0.096-29.911,0.576-40.472c0.447-9.768,2.079-15.07,3.45-18.602c1.816-4.675,3.991-8.015,7.497-11.522
		c3.507-3.507,6.846-5.677,11.522-7.497c3.532-1.378,8.835-3.006,18.604-3.454c9.242-0.417,12.824-0.543,31.497-0.564
		L127.509,55.372z M189.977,72.007c-6.638,0-12.023,5.379-12.023,12.019c0,6.638,5.385,12.023,12.023,12.023S202,90.664,202,84.026
		s-5.385-12.023-12.023-12.023V72.007z M136.496,86.055c-28.414,0-51.451,23.037-51.451,51.451s23.037,51.441,51.451,51.441
		s51.443-23.027,51.443-51.441s-23.031-51.451-51.445-51.451L136.496,86.055L136.496,86.055z M136.496,104.11
		c18.443,0,33.396,14.951,33.396,33.396c0,18.443-14.953,33.396-33.396,33.396c-18.445,0-33.396-14.953-33.396-33.396
		C103.1,119.061,118.051,104.11,136.496,104.11z"
            />
          </g>
        );
      case "twitter":
        return (
          <path
            id="twitter"
            fill="#03A9F4"
            d="M271.625,54.148c-9.867,4.366-20.462,7.277-31.639,8.645
	c11.351-6.753,20.112-17.522,24.216-30.241c-10.653,6.258-22.441,10.828-34.957,13.243c-10.013-10.624-24.304-17.202-40.138-17.202
	c-30.387,0-55.04,24.42-55.04,54.545c0,4.25,0.495,8.412,1.426,12.428c-45.726-2.27-86.3-24.013-113.427-57.019
	c-4.773,8.062-7.451,17.493-7.451,27.476c0,18.919,9.692,35.597,24.478,45.406c-9.023-0.262-17.522-2.794-24.944-6.811
	c0,0.175,0,0.407,0,0.64c0,26.458,18.977,48.491,44.125,53.526c-4.599,1.252-9.46,1.95-14.466,1.95
	c-3.551,0-7.015-0.407-10.362-1.019c6.986,21.626,27.302,37.431,51.402,37.896c-18.861,14.611-42.582,23.372-68.371,23.372
	c-4.453,0-8.819-0.262-13.127-0.786c24.391,15.426,53.323,24.478,84.379,24.478c101.232,0,156.621-83.127,156.621-155.253
	c0-2.358-0.087-4.715-0.204-7.015C254.947,74.756,264.261,65.15,271.625,54.148"
          />
        );
      case "yelp":
        return (
          <path
            id="yelp"
            fill="#ED1F24"
            d="M47.446,27.273C67.35,9.463,90.686-3.068,126.377,3.41v114.726
	c-1.53,5.507-6.119,6.731-10.096,3.671L47.446,27.273z M189.894,69.031c15.989,9.987,33.883,29.95,38.953,59.348l-76.857,12.444
	c-4.434-1.685-7.769-4.469-7.342-11.014L189.894,69.031L189.894,69.031z M154.284,167.439c-4.956,1.114-7.579,4.094-6.425,10.096
	l38.875,65.808c17.287-7.932,34.54-26.445,42.351-53.877L154.284,167.439L154.284,167.439z M114.36,176.617
	c5.142-0.667,9.944-0.766,11.473,4.589l2.295,73.424c-25.256,1.869-46.318-4.651-60.575-24.781L114.36,176.617z M104.264,142.658
	c3.673,4.414,5.733,9.058,0.918,14.685l-70.671,24.781c-8.332-23.003-7.569-44.607,0-65.164L104.264,142.658L104.264,142.658z"
          />
        );
      case "whatsapp":
        return (
          <g id="whatsapp">
            <path
              fill="#6FE879"
              d="M73.041,234.955l4.396,2.198c18.319,10.991,38.835,16.12,59.352,16.12l0,0
		c64.481,0,117.239-52.757,117.239-117.239c0-30.775-12.457-60.818-34.439-82.8s-51.292-34.439-82.8-34.439
		c-64.481,0-117.239,52.757-116.506,117.971c0,21.982,6.595,43.232,17.586,61.55l2.931,4.396l-11.724,43.232L73.041,234.955z"
            />
            <path
              fill="#FFFFFF"
              d="M232.046,41.511c-24.913-25.646-59.352-39.568-94.524-39.568C62.782,1.943,2.698,62.76,3.43,136.767
		c0,23.448,6.595,46.163,17.586,66.68l-19.051,69.61l71.076-18.319c19.784,10.991,41.766,16.12,63.749,16.12l0,0
		c74.007,0,134.092-60.818,134.092-134.825C270.881,100.13,256.959,66.424,232.046,41.511z M137.522,248.144L137.522,248.144
		c-19.784,0-39.568-5.129-56.421-15.388l-4.396-2.198l-42.499,10.991l10.991-41.766l-2.931-4.396
		C10.025,143.362,25.413,74.484,78.17,42.244S199.073,25.39,231.313,78.148s16.853,120.902-35.904,153.143
		C178.556,242.282,158.039,248.144,137.522,248.144z M202.003,166.81l-8.06-3.664c0,0-11.724-5.129-19.051-8.793
		c-0.733,0-1.465-0.733-2.198-0.733c-2.198,0-3.664,0.733-5.129,1.465l0,0c0,0-0.733,0.733-10.991,12.457
		c-0.733,1.465-2.198,2.198-3.664,2.198h-0.733c-0.733,0-2.198-0.733-2.931-1.465l-3.664-1.465l0,0
		c-8.06-3.664-15.388-8.06-21.25-13.922c-1.465-1.465-3.664-2.931-5.129-4.396c-5.129-5.129-10.258-10.991-13.922-17.586
		l-0.733-1.465c-0.733-0.733-0.733-1.465-1.465-2.931c0-1.465,0-2.931,0.733-3.664c0,0,2.931-3.664,5.129-5.862
		c1.465-1.465,2.198-3.664,3.664-5.129c1.465-2.198,2.198-5.129,1.465-7.327c-0.733-3.664-9.526-23.448-11.724-27.844
		c-1.465-2.198-2.931-2.931-5.129-3.664h-2.198c-1.465,0-3.664,0-5.862,0c-1.465,0-2.931,0.733-4.396,0.733l-0.733,0.733
		c-1.465,0.733-2.931,2.198-4.396,2.931c-1.465,1.465-2.198,2.931-3.664,4.396c-5.129,6.595-8.06,14.655-8.06,22.715l0,0
		c0,5.862,1.465,11.724,3.664,16.853l0.733,2.198c6.595,13.922,15.388,26.379,27.111,37.37l2.931,2.931
		c2.198,2.198,4.396,3.664,5.862,5.862c15.388,13.189,32.973,22.715,52.757,27.844c2.198,0.733,5.129,0.733,7.327,1.465l0,0
		c2.198,0,5.129,0,7.327,0c3.664,0,8.06-1.465,10.991-2.931c2.198-1.465,3.664-1.465,5.129-2.931l1.465-1.465
		c1.465-1.465,2.931-2.198,4.396-3.664s2.931-2.931,3.664-4.396c1.465-2.931,2.198-6.595,2.931-10.258c0-1.465,0-3.664,0-5.129
		C204.202,168.275,203.469,167.542,202.003,166.81z"
            />
          </g>
        );
      case "reverbnation":
        return (
          <path
            id="reverbnation"
            fill="#D54F39"
            d="M159.058,100.784c-2.609,0.006-3.745-0.753-4.564-3.274
	c-8.585-26.278-17.313-52.502-26.011-78.738c-0.255-0.777-0.596-1.533-1.047-2.684c-0.43,1.094-0.688,1.667-0.881,2.263
	c-8.57,26.373-17.176,52.733-25.64,79.144c-0.81,2.536-1.919,3.298-4.528,3.289c-26.174-0.101-52.348-0.062-78.515-0.062
	c-2.017,0-4.027,0-6.044,0c0.673,1.148,1.394,1.673,2.114,2.198c22.221,16.073,44.43,32.17,66.689,48.19
	c1.631,1.174,2.198,2.138,1.512,4.202c-5.898,17.829-11.675,35.711-17.476,53.578c-3.09,9.504-6.148,19.021-9.389,29.03
	c1.008-0.661,1.602-1.014,2.159-1.421c22.609-16.31,45.236-32.594,67.777-48.994c2.159-1.578,3.523-1.45,5.581,0.062
	c21.897,16.055,43.875,32.016,65.826,47.997c0.839,0.614,1.705,1.201,3.081,2.153c-0.424-1.376-0.635-2.126-0.878-2.871
	c-8.499-26.109-16.966-52.232-25.584-78.302c-0.863-2.616-0.433-3.894,1.797-5.498c22.194-15.952,44.29-32.04,66.416-48.098
	c0.759-0.549,1.468-1.16,2.722-2.132c-1.586,0-2.47,0-3.351,0C213.574,100.787,186.311,100.715,159.058,100.784z"
          />
        );
      case "pinterest":
        return (
          <path
            id="pinterest"
            fill="#E60023"
            d="M137.499,2.01C62.67,2.01,2.009,62.671,2.009,137.5c0,57.4,35.713,106.47,86.114,126.212
	c-1.184-10.72-2.254-27.207,0.47-38.91c2.462-10.574,15.888-67.347,15.888-67.347s-4.053-8.117-4.053-20.116
	c0-18.84,10.92-32.905,24.516-32.905c11.56,0,17.143,8.679,17.143,19.085c0,11.625-7.401,29.006-11.221,45.112
	c-3.192,13.485,6.763,24.483,20.064,24.483c24.081,0,42.592-25.392,42.592-62.044c0-32.441-23.31-55.123-56.595-55.123
	c-38.552,0-61.18,28.916-61.18,58.799c0,11.645,4.486,24.132,10.084,30.92c1.107,1.342,1.269,2.517,0.94,3.886
	c-1.028,4.279-3.314,13.482-3.763,15.366c-0.591,2.48-1.964,3.007-4.531,1.811c-16.922-7.877-27.502-32.617-27.502-52.489
	c0-42.74,31.054-81.991,89.524-81.991c47.001,0,83.527,33.493,83.527,78.253c0,46.695-29.442,84.275-70.307,84.275
	c-13.73,0-26.637-7.133-31.055-15.558c0,0-6.794,25.869-8.441,32.209c-3.059,11.768-11.316,26.52-16.84,35.52
	c12.677,3.925,26.149,6.042,40.117,6.042c74.83,0,135.491-60.661,135.491-135.49C272.99,62.671,212.329,2.01,137.499,2.01"
          />
        );
      case "angellist":
        return (
          <path
            id="angellist"
            fill="#231F20"
            d="M193.95,113.385c10.775,2.035,18.359,6.573,22.753,13.612
	c4.394,7.04,6.603,18.15,6.627,33.33c0,30.11-9.051,54.748-27.153,73.916s-41.25,28.745-69.444,28.733
	c-11.052,0.007-22.011-2.026-32.325-5.998c-10.006-3.734-19.165-9.43-26.937-16.755c-7.961-7.047-14.528-15.526-19.359-24.998
	c-4.198-8.362-6.404-17.581-6.447-26.937c0-10.272,2.209-18.216,6.627-23.83c4.418-5.615,11.397-9.47,20.939-11.565
	c-1.524-3.445-2.843-6.977-3.951-10.577c-0.708-2.144-1.131-4.372-1.257-6.627c0-5.375,2.837-10.871,8.512-16.486
	s11.02-8.422,16.037-8.422c2.316,0.029,4.613,0.423,6.806,1.167c2.872,1.004,5.634,2.297,8.243,3.861
	c-9.207-26.039-15.899-46.14-20.077-60.303c-4.178-14.163-6.261-23.92-6.249-29.272c0-7.411,1.91-13.295,5.729-17.653
	c3.954-4.404,9.675-6.803,15.588-6.537c11.23,0,25.435,25.088,42.615,75.263c2.981,8.596,5.25,15.228,6.806,19.898
	c1.317-3.699,3.167-8.955,5.549-15.767c17.24-49.708,32.067-74.562,44.482-74.562c5.546-0.231,10.904,2.036,14.6,6.178
	c3.592,4.118,5.387,9.644,5.387,16.575c0,5.256-1.999,14.869-5.998,28.841C208.053,72.44,202.019,90.745,193.95,113.385z
	 M65.639,186.492c1.676,2.035,4.005,5.028,6.986,8.979c7.89,10.871,15.175,16.306,21.855,16.306
	c2.219,0.015,4.372-0.748,6.088-2.155c1.541-0.993,2.536-2.645,2.694-4.472c0-1.796-1.197-4.789-3.592-8.979
	c-2.93-4.956-6.225-9.686-9.859-14.151c-3.593-4.774-7.582-9.238-11.924-13.343c-3.161-2.801-5.699-4.202-7.614-4.202
	c-4.178,0-8.033,2.239-11.565,6.716c-3.535,4.519-5.4,10.121-5.28,15.857c0.136,5.645,1.356,11.211,3.592,16.396
	c2.727,6.513,6.315,12.632,10.667,18.192c6.857,9.277,15.867,16.747,26.255,21.765c10.84,5.143,22.717,7.724,34.713,7.542
	c22.401,0.398,43.827-9.151,58.508-26.075c15.707-17.383,23.561-39.155,23.561-65.314c0.159-6.412-0.444-12.82-1.796-19.089
	c-0.766-3.998-2.845-7.627-5.908-10.308c-4.897-4.059-14.426-7.704-28.589-10.936c-14.558-3.267-29.437-4.888-44.357-4.831
	c-4.298,0-7.345,0.718-9.141,2.155s-2.694,3.885-2.694,7.345c0,8.129,4.537,14.013,13.612,17.653s23.771,5.435,44.087,5.387h7.345
	c1.555-0.071,3.052,0.594,4.041,1.796c1.173,1.665,1.885,3.61,2.065,5.639c-2.035,1.916-6.225,4.094-12.571,6.537
	c-5.107,1.804-9.979,4.215-14.51,7.183c-6.937,5.097-12.781,11.533-17.186,18.928c-4.016,6.115-6.277,13.215-6.537,20.526
	c0.173,4.864,1.113,9.67,2.784,14.241c1.294,3.327,2.227,6.782,2.784,10.308v1.257l-0.359,1.616
	c-5.256-0.359-9.404-3.436-12.445-9.23c-3.041-5.795-4.561-13.528-4.561-23.202v-1.616c-0.821,0.75-1.762,1.357-2.784,1.796
	c-0.944,0.368-1.95,0.551-2.963,0.539c-1.024,0.005-2.046-0.085-3.053-0.269c-1.091-0.212-2.17-0.482-3.232-0.808
	c0.349,1.269,0.619,2.559,0.808,3.861c0.156,0.981,0.246,1.97,0.269,2.963c0.026,4.373-1.872,8.537-5.19,11.385
	c-3.356,3.12-7.791,4.82-12.373,4.741c-7.53,0-15.175-3.675-22.933-11.026s-11.643-14.534-11.655-21.55
	c-0.018-1.183,0.133-2.362,0.449-3.502c0.273-0.982,0.793-1.878,1.508-2.604V186.492z M119.406,190.784
	c2.169-0.067,4.199-1.085,5.549-2.784c1.573-1.605,2.473-3.751,2.514-5.998c0-2.263-1.64-7.548-4.921-15.857
	c-3.384-8.491-7.493-16.674-12.283-24.459c-2.826-5.014-6.392-9.572-10.577-13.522c-3.472-3.041-6.758-4.561-9.859-4.561
	c-2.514,0-5.292,1.58-8.333,4.741c-3.041,3.161-4.561,6.118-4.561,8.871c0,2.861,1.491,7.159,4.472,12.894
	c3.449,6.442,7.469,12.56,12.014,18.281c4.328,6.031,9.315,11.561,14.869,16.486c4.657,3.903,8.363,5.854,11.116,5.854
	C119.406,190.73,119.406,190.784,119.406,190.784z M136.969,104.226L117.61,48.268c-5.016-14.211-8.901-23.501-11.655-27.871
	s-5.747-6.549-8.979-6.537c-2.351-0.045-4.587,1.019-6.034,2.873c-1.653,2.217-2.479,4.942-2.335,7.704
	c0,5.495,2.089,15.073,6.267,28.733s10.452,31.523,18.82,53.587c0.655-1.261,1.737-2.248,3.053-2.784
	c1.729-0.606,3.557-0.88,5.387-0.808c0.718,0,2.149,0.06,4.292,0.18s5.657,0.401,10.541,0.844L136.969,104.226z M157.207,158.477
	c-4.897-0.214-9.775-0.754-14.6-1.616c-4.485-0.807-8.89-2.009-13.163-3.592c1.904,3.831,3.604,7.656,5.1,11.475
	c1.419,3.691,2.619,7.463,3.592,11.296c2.746-3.475,5.747-6.74,8.979-9.769C150.254,163.394,153.63,160.787,157.207,158.477z
	 M181.038,110.278c7.997-21.741,14.241-39.699,18.73-53.874s6.728-22.867,6.716-26.075c0.175-2.863-0.616-5.702-2.245-8.063
	c-1.471-1.903-3.774-2.974-6.178-2.873c-3.34,0-6.746,2.778-10.218,8.333s-7.297,14.486-11.475,26.794l-17.958,51.791
	L181.038,110.278z"
          />
        );
      case "dribbble":
        return (
          <g id="dribbble">
            <circle fill="#EA4C89" cx="138" cy="137" r="128.276" />
            <path
              fill="#C32361"
              d="M138,3.379C64.233,3.379,4.379,63.233,4.379,137S64.233,270.621,138,270.621
                   c73.622,0,133.621-59.854,133.621-133.621S211.622,3.379,138,3.379z M226.259,64.972c15.942,19.42,25.507,44.202,25.797,71.013
                   c-3.768-0.725-41.449-8.406-79.419-3.623c-0.87-1.884-1.594-3.913-2.464-5.942c-2.319-5.507-4.928-11.159-7.536-16.521
                   C204.666,92.798,223.796,68.161,226.259,64.972z M138,23.089c28.985,0,55.507,10.869,75.651,28.695
                   c-2.029,2.899-19.275,25.942-59.854,41.159c-18.695-34.347-39.42-62.463-42.608-66.811C119.739,24.103,128.725,23.089,138,23.089z
                    M89.45,33.813c3.043,4.058,23.333,32.318,42.318,65.941c-53.332,14.203-100.433,13.913-105.506,13.913
                   C33.654,78.305,57.566,48.885,89.45,33.813z M23.799,137.145c0-1.159,0-2.319,0-3.478c4.927,0.145,60.289,0.87,117.245-16.231
                   c3.333,6.377,6.377,12.898,9.275,19.42c-1.449,0.435-3.043,0.87-4.493,1.304c-58.84,18.985-90.143,70.869-92.752,75.216
                   C34.958,193.231,23.799,166.42,23.799,137.145z M138,251.201c-26.376,0-50.724-8.985-69.999-24.058
                   c2.029-4.203,25.217-48.84,89.564-71.303c0.29-0.145,0.435-0.145,0.725-0.29c16.087,41.594,22.608,76.521,24.347,86.521
                   C168.869,248.013,153.797,251.201,138,251.201z M201.622,231.636c-1.16-6.957-7.246-40.289-22.174-81.303
                   c35.797-5.652,67.1,3.623,71.013,4.927C245.535,186.999,227.274,214.39,201.622,231.636z"
            />
          </g>
        );
      case "stackoverflow":
        return (
          <g id="stackoverflow">
            <polygon
              fill="#BCBBBB"
              points="214.523,247.692 214.523,176.168 238.363,176.168 238.363,271.535 23.936,271.535 23.936,176.168 
		47.776,176.168 47.776,247.692 	"
            />
            <path
              fill="#F48024"
              d="M74.01,169.589l116.652,24.516l4.903-23.33L78.913,146.258L74.01,169.589z M89.445,113.733l108.057,50.324
		l10.065-21.611L99.51,92.122L89.445,113.733z M119.347,60.722l91.596,76.283l15.257-18.319l-91.595-76.283L119.347,60.722z
		 M178.477,4.333l-19.129,14.228l71.14,95.645l19.129-14.228L178.477,4.333z M71.643,223.848l119.201,0v-23.84l-119.201,0V223.848z"
            />
          </g>
        );
      default:
    }
  };
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="1.25em"
      //height="275px"
      viewBox="-0.5 -0.5 275 275"
      //enableBackground="new -0.5 -0.5 275 275"
      xmlSpace="preserve"
    >
      {iconSVG(props.iconName)}
    </svg>
  );
};
