package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/pritunl/pritunl-client-electron/service/autoclean"
	"github.com/pritunl/pritunl-client-electron/service/profile"
)

func stopPost(c *gin.Context) {
	for _, prfl := range profile.GetProfiles() {
		prfl.Stop()
	}

	autoclean.CheckAndCleanWatch()

	c.JSON(200, nil)
}
