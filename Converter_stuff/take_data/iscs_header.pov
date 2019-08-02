camera {
  sky      <0,0,1>
  location <0, 1050, 75>
  look_at  <71.08, 0, 15.905>
//  location <0, 1050, 50>
//  look_at  <0, 0, 0>
}

light_source {
  <-4275, 5000, 4275>
  color White*1.5
  area_light <1, 0, 0>, <0, 0, 1>, 2, 2
  adaptive 1
  jitter
//  spotlight
//  radius 700
//  falloff 750
//  tightness 10
//  point_at <0, 0, 0>
}

//light_source {
//  <0, -1000, 0>
//  color White*0.50
//  adaptive 1
//  jitter
//}


// Special Stuff for Terra
sphere { <0, 5, 0>, 10.125 texture { pigment { color VLightGray } } }
torus { 12.25, 1 rotate -90*y pigment { VLightGrey } translate <0, 5, 0> }
//light_source { <4275, 5000, -4275> color White*0.75 spotlight radius 90 falloff 120 tightness 10 point_at <0, 0, 0> }

// Special Stuff for Sian
sphere { <7.3, 5, -231.6>, 6.75 texture { pigment { color SeaGreen} } }
torus { 7.75, 1 rotate -90*y pigment { VLightGrey } translate <7.3, 5, -231.6> }
//light_source { <4275, 5000, -4275> color White*0.5 spotlight radius 30 falloff 40 tightness 10 point_at <7.3, 0, -231.6> }

// Special Stuff for Luthien
sphere { <169.26, 5, 252.72>, 6.75 texture { pigment { color Scarlet} } }
torus { 7.75, 1 rotate -90*y pigment { VLightGrey } translate <169.26, 5, 252.72> }
//light_source { <4275, 5000, -4275> color White*0.5 spotlight radius 30 falloff 40 tightness 10 point_at <169.26, 0, 252.72> }

// Special Stuff for New Avalon
sphere { <269.15, 5, -112.1>, 6.75 texture { pigment { color Coral} } }
torus { 7.75, 1 rotate -90*y pigment { VLightGrey } translate <269.15, 5, -112.1> }
//light_source { <4275, 5000, -4275> color White*0.5 spotlight radius 30 falloff 40 tightness 10 point_at <269.15, 0, -112.1> }

// Special Stuff for Atreus
sphere { <-192.7, 5, -165.4>, 6.75 texture { pigment { color Med_Purple} } }
torus { 7.75, 1 rotate -90*y pigment { VLightGrey } translate <-192.7, 5, -165.4> }
//light_source { <4275, 5000, -4275> color White*0.5 spotlight radius 30 falloff 40 tightness 10 point_at <-192.7, 0, -165.4> }

// Special Stuff for Tharkad
sphere { <-215.9, 5, 152.83>, 6.75 texture { pigment { color NeonBlue} } }
torus { 7.75, 1 rotate -90*y pigment { VLightGrey } translate <-215.9, 5, 152.83> }
//light_source { <4275, 5000, -4275> color White*0.5 spotlight radius 30 falloff 40 tightness 10 point_at <-215.9, 0, 152.83> }

background { color Black }

//sky_sphere { S_Cloud4 }
sky_sphere { pigment { granite color_map { [.8 rgb 0] [1 rgb 1] } turbulence 1 scale .025} }

torus {
	250, 2                  // major and minor radius 
	rotate -90*y            // so we can see it from the top 
	pigment { VLightGrey }
	translate <0, -6, 0>
}

torus { 
	500, 2                  // major and minor radius
	rotate -90*y            // so we can see it from the top 
	pigment { VLightGrey } 
	translate <0, -6, 0>
}

disc { <0, -9, 0>, <0, 1, 0>, 500 texture{ T_Grnt19a scale 250 } }

